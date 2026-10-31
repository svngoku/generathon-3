# Agent prompts — Le Dernier Reflet, phase by phase

`CLAUDE.md` holds the rules, so these prompts stay short. Paste one phase at a time; each ends at a **checkpoint** where the team approves or redirects. Replace every `[…]`.

---

## 0 · Kickoff (once per new session)
```
git pull. Read CLAUDE.md and every file it lists, in order (official_rules.md overrides everything).
Run `python3 tools/reflet.py check` and `python3 tools/reflet.py next`. Then reply with:
1. the story in two sentences,
2. the open decisions still blocking shots,
3. the Arcads tools you found + the credit balance,
4. the phase plan with an estimated credit cost per phase.
Don't generate anything yet.
```

## 1 · References → locked/
```
Phase 1. Run `bash tools/fetch_refs.sh` (or fetch the Hugging Face bucket via the HF MCP if the network blocks it).
The 65 Notion images are already in 02_refs/notion/ (see index.csv). Sort the unclassified bucket images in 02_refs/refs.md.
Propose which file becomes H_sheet, C_sheet, M_sheet, plate_TRAIN and plate_LOC-01/02/04/05 (candidates are listed in refs.md).
CHECKPOINT: show a grid with one-line verdicts. I'll say which go into locked/.
After my approval: copy each approved file into locked/ under its canonical name, then upload it ONCE with
tools/arcads_put.sh (get_upload_url → PUT → arcads_register_image → --asset) so locked/arcads_assets.json holds
one persistent asset id per reference. Every later call uses those ids (reflet.py prompt <id> --calls prints them).
```

## 2 · Plates (sets)
```
Phase 2. Generate the missing plates with Nano Banana 2.1 (21:9, 2K) ×2 AND Seedream 5 Pro (16:9) ×2, each with its existing reference attached:
LOC-00 dark street (plates/LOC-00_sheet.txt, ref notion/89) → S01 + S02 (TRAIN, from Metro Train Arrive) → LOC-01 sheet → LOC-02 sheet → LOC-03 sheet → S03 (LOC-04) → S04 (LOC-05).
Use the prompt files as-is. Log every call in dernier-reflet/05_video/log.md.
CHECKPOINT after each set: both variants + which one you'd lock and why (geometry, light, palette vs visual_bible.md).
```

## 3 · Animatic (story test)
```
Phase 3. Build an animatic of all 51 shots on the shotlist.csv grid: for each shot use the best existing still
(its notion_refs image, else its frame cropped from locked/storyboard.png, else a cheap draft), hold it for dur_s, black for 34 and 39. ffmpeg concat →
dernier-reflet/07_edit/animatic_v01.mp4 (2.39:1 letterboxed in 1920x1080), no sound, exactly 180 s.
CHECKPOINT: what does a muted stranger understand at 0:44, 1:29, 1:44, 2:43, 3:00? Flag beats that don't read.
```

## 3b · Voices for lip sync (before 06b and 37)
```
Phase 3b. With ElevenLabs: design la Vieille's voice (very old woman, low, hoarse, slow, French) and the heroine's voice.
Generate 2 takes each: 06b « Le dernier métro ne ramène personne, ma fille. » (≤ 3 s) and 37 « Aidez-moi… » (≤ 4 s).
Save the picked takes as dernier-reflet/06_audio/06b_voice_v01.wav and 37_voice_v01.wav, upload them with tools/arcads_put.sh.
CHECKPOINT: play me both takes.
```

## 4 · Inserts E01–E10
```
Phase 4. For E01…E10: `python3 tools/reflet.py prompt E0x --soul` → still (2 variants, plate attached, no people) →
image-to-video with ONE discreet action. For E05/E06/E10 do a clean plate + an anomaly pass.
Save to 04_frames/ and 05_video/, update shotlist.csv status (todo → draft → approved), log every call.
CHECKPOINT: contact sheet of all ten + verdicts.
```

## 5 · Acts — one block at a time
```
Phase 5 — shots [10–18 | 21–28 | 29a–33 | 35–38].
For each shot: `python3 tools/reflet.py prompt <id> --calls` and send the printed calls as they are:
Nano Banana 2.1 ×2 + Seedream 5 Pro ×1 for the still → I pick → upload the approved still (arcads_put.sh) →
Seedance 2.5 1080p high from that keyframe. Follow the consistency protocol in model_map.md; reject any drift. Still first (2 variants) → I approve → motion with the video model in the row.
C never moves on screen in the carriage: 14/16/17 share one locked framing; only its seat changes.
VFX shots: clean plate + character/reflection passes with identical framing.
CHECKPOINT per block: stills grid, then takes + which to keep.
```
Fix a nearly-good take:
```
Use edit_video_seedance_25 on dernier-reflet/05_video/[id]_v[XX].mp4: [exact problem, e.g. "her coat turns grey at 2s — keep everything else identical"]. Save as _v[XX]b.
```

## 6 · Sound (+ loop)
```
Phase 6. Follow 06_audio/score.md. Generate the two whispers (2 takes each), the music fallback if needed,
and gather SFX. Lay them on the animatic timing.
CHECKPOINT: play me 01:44–03:00 with sound only.
```

## 7 · Edit & delivery
```
Phase 7. LOOP: build 39 from the approved 01 (push into the window, last frame == 01 frame 1); play the export on repeat and check the joint (picture + sound).
Then the 9:16 social cut per delivery/social_9x16.md (hook title, FR/EN subtitles, close-ups punched in). Replace animatic stills with approved takes, composite the VFX passes and the post-only texts
(bus notification, phone clock, unknown station). Mix. Export 07_edit/le-dernier-reflet_v01.mp4,
check `python3 tools/reflet.py check` and duration == 3:00.000. Fill delivery/submission.md.
CHECKPOINT: full watch, then upload before 13:30.
```
