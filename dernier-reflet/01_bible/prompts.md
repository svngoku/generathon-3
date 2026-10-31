# Prompts — index

All prompts are verbatim copies. **Marty's PDF V4 is the reference**; the Notion JSONs are kept as richer alternatives.
Get everything for one shot, with the refs to attach:

```bash
python3 tools/reflet.py prompt 14          # KEY + ARCADS prompts, refs, rules
python3 tools/reflet.py prompt E05 --soul  # + the Notion Soul-Cinematic JSON
```

## Folders
| Folder | What | Source | Count |
|---|---|---|---|
| `prompts/key/` | **key-shot JSON** (`shot`, `reference_assets`, `camera`, `prompt`, `negative_prompt`) — use first when present | PDF V4 §5 | 17 (01, 05, 09, 10, 12-13, 14, 16, 17, 19, 21, 22, 23, 24, 29a-30, 31, 37, 38) |
| `prompts/shots/` | **one Arcads prompt per shot** (EN, action line in FR) | PDF V4 §4 | 51 (every shot, incl. inserts and blacks) |
| `prompts/soul/` | Soul-Cinematic JSON (full STYLE/COMPOSITION/CAMERA blocks) | Notion V2 + V4.1 | 14 (E01–E10, P01, P05, P09, P10) |
| `prompts/plates/` | location sheets LOC-01…05 + priority plates S01–S05 | Notion | 10 |
| `prompts/_camera_lock.json` | canonical camera block | Notion Master Lock V3 | 1 |

`shotlist.csv` points each shot to its files (`prompt`, `key_prompt`, `soul_json`).

## Prompt rules (every generation)
1. **Camera:** DV camcorder · anamorphic · 2.39:1 · subtle MiniDV noise + mild chroma, gentle halation. No VHS filter, no 35 mm grain.
2. **Identity lock:** "the exact … from the uploaded character sheet" + attach the sheet. C ≠ M: never give C's prompt M's reference or vice versa.
3. **Location lock:** attach the approved plate; "preserve approved set geometry, props, wardrobe and screen direction".
4. **Negative (always):** no VHS filter, no videogame/CGI look, no plastic skin, no warped anatomy, no extra fingers, no duplicated faces, no random text, no subtitles, no logos, no unmotivated camera movement.
5. **No readable text generated** — screens, signs, line map are composited in post.
6. **VFX shots** (E05, E06, E10, 23, 24, 27, 28, 29b, 30, 31, 33, 37): clean plate + separate character/reflection passes, composited in the edit.
7. **C in 14/16/17:** same axis, focal length, geometry and pose — only its seat changes, reveal by cut.
8. Prompts are templates (PDF §9): adapt the French action line to English if the model needs it; never touch camera or identity clauses. Don't invent the C ↔ M link.

## Plate files (`prompts/plates/`)
| File | Set |
|---|---|
| `LOC-01_sheet.txt` | metro station corridors |
| `LOC-02_sheet.txt` | carriage |
| `LOC-03_sheet.txt` | ghost station |
| `LOC-04_sheet.txt` | Haussmann corridor |
| `LOC-05_sheet.txt` | mirror room |
| `S01.json` / `S02.json` | TRAIN front in fog / open doors |
| `S03.json` | LOC-04 vanishing-point corridor |
| `S04.json` | LOC-05 room + mirror |
| `S05.json` | hand under the glass (E10 base) — only from the approved S04 |
