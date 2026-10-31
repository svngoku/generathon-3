#!/usr/bin/env python3
"""Le Dernier Reflet — production helper (stdlib only).

  python3 tools/reflet.py check              # timeline = 180 s exact, no gaps/overlaps, files referenced exist
  python3 tools/reflet.py status             # progress per status / per location / blocked shots
  python3 tools/reflet.py prompt 14          # Marty's V4 prompts for a shot + refs to attach
  python3 tools/reflet.py prompt 29a --soul  # also print the Notion Soul-Cinematic JSON when one exists
  python3 tools/reflet.py prompt 23 --build --pass A  # extra: JSON built from lock.json (VFX pass A clean / B anomaly)
  python3 tools/reflet.py next               # next shots to generate, in batch order (plates -> inserts -> acts)

IDs are the V4 storyboard numbers (01..39 with 29a/29b/32a/32b) + inserts E01..E10.
Prompt sources (all verbatim): KEY = PDF V4 §5 (17 key shots), ARCADS = PDF V4 §4 (every shot),
SOUL = Notion Soul-Cinematic JSON (01, 05, 09, 10, E01-E10).
"""
import csv
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROJ = ROOT / "dernier-reflet"
BIBLE = PROJ / "01_bible"
TOTAL_S = 180

# V4 §5 batch order: plates first, then inserts, acts 1-2, act 3, ending (needs N).
BATCHES = [
    ("1 PLATES", lambda r: False),  # plates are not shots; see visual_bible.md
    ("2 INSERTS", lambda r: r["id"].startswith("E")),
    ("3 ACTE 1-2", lambda r: not r["id"].startswith("E") and 1 <= num(r["id"]) <= 20),
    ("4 ACTE 3", lambda r: not r["id"].startswith("E") and 21 <= num(r["id"]) <= 34),
    ("5 FIN", lambda r: not r["id"].startswith("E") and num(r["id"]) >= 35),
]


def num(sid):
    return int("".join(ch for ch in sid if ch.isdigit()) or 0)


def load_rows():
    with open(BIBLE / "shotlist.csv", newline="") as f:
        return list(csv.DictReader(f))


def load_lock():
    return json.loads((BIBLE / "lock.json").read_text())


def find(rows, sid):
    sid = sid.strip()
    if sid[:1].isdigit() and len(sid.rstrip("abAB")) == 1:
        sid = "0" + sid
    for r in rows:
        if r["id"].lower() == sid.lower():
            return r
    sys.exit(f"unknown shot id: {sid}")


def cmd_check(rows):
    errors = []
    t = 0
    for r in rows:
        s, e, d = int(r["start_s"]), int(r["end_s"]), int(r["dur_s"])
        if s != t:
            errors.append(f"{r['id']}: starts at {s}s, expected {t}s (gap/overlap)")
        if e - s != d:
            errors.append(f"{r['id']}: duration {d}s but TC span is {e - s}s")
        t = e
        for col in ("prompt", "key_prompt", "soul_json"):
            p = r.get(col, "")
            if p and not (BIBLE / p).exists():
                errors.append(f"{r['id']}: {col} file missing: {p}")
        if not r["prompt"] and r["ref"] != "BLACK":
            errors.append(f"{r['id']}: no prompt")
    if t != TOTAL_S:
        errors.append(f"total = {t}s, expected {TOTAL_S}s")
    story = sum(int(r["dur_s"]) for r in rows if not r["id"].startswith("E"))
    inserts = sum(int(r["dur_s"]) for r in rows if r["id"].startswith("E"))
    print(f"{len(rows)} shots · storyboard {story}s + inserts {inserts}s = {story + inserts}s")
    for e in errors:
        print("ERROR", e)
    print("OK" if not errors else f"{len(errors)} error(s)")
    return 1 if errors else 0


def cmd_status(rows):
    by = {}
    for r in rows:
        by.setdefault(r["status"], []).append(r["id"])
    for k, v in sorted(by.items()):
        print(f"{k:9} {len(v):3}  {' '.join(v)}")
    blocked = [r["id"] for r in rows if "N" in r["ref"].replace("ENV", "").split("+")]
    if blocked:
        print(f"BLOCKED on N (second passenger reference not chosen): {' '.join(blocked)}")
    return 0


def refs_for(r, lock):
    refs = []
    loc = lock["locations"].get(r["location"], {})
    if loc.get("plate"):
        refs.append(f"dernier-reflet/{loc['plate']}  (location plate {r['location']})")
    if "TRAIN" in r["ref"].split("+"):
        refs.append("dernier-reflet/locked/plate_TRAIN.png  (approved white/teal train)")
    for code in ("H", "C", "M", "N"):
        if code in r["ref"].split("+"):
            refs.append(f"dernier-reflet/{lock['characters'][code]['sheet']}  ({lock['characters'][code]['name']})")
    return refs


def build(r, lock, vfx_pass):
    loc = lock["locations"].get(r["location"], {})
    codes = [c for c in ("H", "C", "M", "N") if c in r["ref"].split("+")]
    who = "; ".join(lock["characters"][c]["descriptor"] for c in codes) or "no human subject; environment-only shot"
    caption = f"{r['beat']} — {r['action']}."
    if codes:
        caption = f"{who}. {caption}"
    if "VFX" in r["ref"]:
        caption += (" PASS A: clean plate, everything physically normal, identical framing."
                    if vfx_pass == "A" else
                    " PASS B: same exact framing and light as pass A, with the impossible element only.")
    lens = "Wide anamorphic" if any(k in r["frame"].lower() for k in ("large", "aérien", "establishing")) else "Medium anamorphic"
    return {
        "_source": "built by tools/reflet.py from shotlist.csv + lock.json — review before generating",
        "Caption": caption,
        "STYLE": lock["style"],
        "COMPOSITION": {"Framing": r["frame"], "Layout": "", "Perspective": "grounded eye-level or slightly low filmic viewpoint"},
        "SCENE": {
            "Subject Characteristics": (", ".join(codes) or "ENV") + " — retain exact uploaded visual identity for any named characters; never invent additional figures",
            "Setting": loc.get("setting", ""),
            "Geographic / Cultural Context": "Paris, France, around midnight",
        },
        "CINEMATOGRAPHY_AND_LIGHTING": {
            "Director": lock["director"],
            "Lighting Style": loc.get("lighting", ""),
            "Color Palette": loc.get("palette", ""),
            "Overall Color Tone": loc.get("tone", ""),
            "Tone & Mood": "subtle dread, uncanny isolation",
        },
        "CAMERA_AND_LENS": {**lock["camera"], "Lens size": lens},
        "PHYSICAL_ATTRIBUTES": {
            "Material & Texture": loc.get("materials", ""),
            "Physics & Effects": f"sound cue for the edit: {r['sound']}",
            "Execution Style": "practical DV-camcorder capture with anamorphic optics; compositing reserved for impossible reflections",
        },
        "NEGATIVE": lock["forbidden"],
        "BRANDED_OBJECTS": [],
    }


def cmd_prompt(rows, sid, vfx_pass="B", soul=False, build_json=False):
    r = find(rows, sid)
    lock = load_lock()
    if r["ref"] == "BLACK":
        print(f"{r['id']}: black frame ({r['dur_s']}s) — made in the edit, nothing to generate.")
        return 0
    print(f"# shot {r['id']} ({r['story']}) {r['tc_start']}–{r['tc_end']} · {r['dur_s']}s · {r['ref']} · {r['location']}")
    print(f"# action: {r['beat']} — {r['action']} | cadre: {r['frame']} | son: {r['sound']}")
    print(f"# image: {r['image_model']}  ->  video: {r['video_model']}")
    print(f"# save: dernier-reflet/{r['frame_out']}  ·  dernier-reflet/{r['video_out']}")
    for ref in refs_for(r, lock):
        print(f"# attach: {ref}")
    for f in r.get("notion_refs", "").split():
        print(f"# existing Notion image for this shot: dernier-reflet/02_refs/notion/{f}")
    print("# storyboard frame: dernier-reflet/locked/storyboard.png (original 39-frame board)")
    for code in ("H", "C", "M", "N"):
        if code in r["ref"].split("+"):
            print(f"# rule {code}: {lock['characters'][code]['rule']}")
    if "VFX" in r["ref"]:
        print("# VFX: generate pass A (clean plate) and pass B (characters/reflection) with IDENTICAL framing, composite in edit")
    if r.get("key_prompt"):
        print(f"\n## KEY PROMPT (PDF V4 §5) — 01_bible/{r['key_prompt']}")
        print((BIBLE / r["key_prompt"]).read_text().strip())
    print(f"\n## ARCADS PROMPT (PDF V4 §4) — 01_bible/{r['prompt']}")
    print((BIBLE / r["prompt"]).read_text().strip())
    if r.get("soul_json"):
        if soul:
            print(f"\n## SOUL JSON (Notion) — 01_bible/{r['soul_json']}")
            print((BIBLE / r["soul_json"]).read_text().strip())
        else:
            print(f"\n# also available: Notion Soul JSON 01_bible/{r['soul_json']} (--soul to print)")
    if build_json:
        print("\n## BUILT JSON (lock.json) — review before use")
        print(json.dumps(build(r, lock, vfx_pass), ensure_ascii=False, indent=2))
    return 0


def cmd_next(rows, n=8):
    for name, pred in BATCHES:
        todo = [r for r in rows if pred(r) and r["status"] != "approved" and r["ref"] != "BLACK"]
        if name.startswith("1"):
            plates = [p for p in ("TRAIN", "LOC-01", "LOC-02", "LOC-03", "LOC-04", "LOC-05")
                      if not (PROJ / "locked" / f"plate_{p}.png").exists()]
            if plates:
                print(f"{name}: lock these plates first -> {' '.join(plates)} (see visual_bible.md)")
                return 0
            continue
        if todo:
            print(f"{name}: " + " ".join(f"{r['id']}[{r['status']}]" for r in todo[:n]))
            return 0
    print("All shots approved — go to the edit.")
    return 0


def main(argv):
    if len(argv) < 2 or argv[1] in ("-h", "--help"):
        print(__doc__)
        return 0
    rows = load_rows()
    cmd = argv[1]
    if cmd == "check":
        return cmd_check(rows)
    if cmd == "status":
        return cmd_status(rows)
    if cmd == "next":
        return cmd_next(rows)
    if cmd == "prompt" and len(argv) >= 3:
        p = "B"
        if "--pass" in argv:
            p = argv[argv.index("--pass") + 1].upper()
        return cmd_prompt(rows, argv[2], p, soul="--soul" in argv, build_json="--build" in argv)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv))
