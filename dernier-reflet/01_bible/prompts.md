# Prompts — index

Every prompt is a file in `prompts/`, copied verbatim from Notion (`00_brief/notion_snapshot.md`). Get the ready-to-send version of any shot, with the refs to attach, with:

```bash
python3 tools/reflet.py prompt 14          # any shot id from shotlist.csv
python3 tools/reflet.py prompt E05 --pass A  # VFX clean plate
```

Shots with no verbatim prompt get one **built** from `shotlist.csv` + `lock.json` (`"_source": "built…"`). Before sending a built prompt: write the Caption in English, fill `Layout`, keep the camera block untouched.

## Prompt rules (every generation)
1. **Format:** Soul Cinematic JSON (`Caption`, `STYLE`, `COMPOSITION`, `SCENE`, `CINEMATOGRAPHY_AND_LIGHTING`, `CAMERA_AND_LENS`, `PHYSICAL_ATTRIBUTES`, `BRANDED_OBJECTS`).
2. **Camera block = `_camera_lock.json`** (DV camcorder · anamorphic · 2.39:1). V3 wins over any older 35 mm / 16:9 wording.
3. **Identity lock:** "the SAME … from the uploaded character sheet" + attach the sheet. Never describe a face from scratch.
4. **Location lock:** attach the location plate; say "IDENTICAL approved …".
5. **No extra people.** Inserts are environment-only.
6. **No readable invented text:** screens, signs and line maps are composited in post.
7. A still is one instant: flicker, drift, swing are written as *intentions* for image-to-video.

## Files
| File | Shot(s) | Source |
|---|---|---|
| `_camera_lock.json` | all | Master Lock V3 |
| `LOC-01_sheet.txt` | metro station corridors | Notion "Prompt Scénario Scene" 1 |
| `LOC-03_sheet.txt` | ghost station | idem 2 |
| `LOC-02_sheet.txt` | carriage | idem 3 |
| `LOC-04_sheet.txt` | Haussmann corridor | idem 4 |
| `LOC-05_sheet.txt` | mirror room | idem 5 |
| `S01.json` | plate TRAIN (front, fog) | Master Lock V3 |
| `S02.json` | plate TRAIN (open doors) | V3 |
| `S03.json` | plate LOC-04 | V3 |
| `S04.json` | plate LOC-05 (mirror) | V3 |
| `S05.json` | E10 base (hand under glass) — only from approved S04 | V3 |
| `E01.json` … `E10.json` | inserts E01–E10 | V2 library (apply V3 camera lock) |
| `P01.json` | shot 01 Paris before midnight | V4.1 |
| `P05.json` | shot 05 last bus cancelled (H) | V4.1 |
| `P09.json` | shot 09 blue metro arriving (TRAIN) | V4.1 |
| `P10.json` | shot 10 heroine in the empty carriage (H) | V4.1 |
| *missing* | 13 more V4.1 key shots | Notion export truncated after P10 → copy from Notion as `P<id>.json` and set the `prompt` column in `shotlist.csv` |

Location sheets use the `{{variables}}` convention when you customise them; the uploaded reference image is the plate.
