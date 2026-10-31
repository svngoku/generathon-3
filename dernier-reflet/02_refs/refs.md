# Reference assets

Already-made assets live in two places. **Reuse them; never regenerate an approved reference.**

## 1. Hugging Face bucket `Svngoku/generathon-tech-arcads`
Base URL: `https://huggingface.co/buckets/Svngoku/generathon-tech-arcads/resolve/<file>` · download all: `bash tools/fetch_refs.sh` (→ `dernier-reflet/02_refs/hf/`, git-ignored).

| File | What (from Notion layout) | Promote to |
|---|---|---|
| `jeune-femme-character.png` | heroine character sheet (Notion "personnage principal") | `locked/H_sheet.png` |
| `Jeune Femme Character from ElevenLabs.png` | heroine, alternate render | — (compare with the above) |
| `Horror Movie Image - La créature.png` | creature character sheet | `locked/C_sheet.png` |
| `Jeune Homme Character Horror Movie.png` | young man (mirror victim) | `locked/M_sheet.png` |
| `Metro Train Arrive.png` | approved white/teal train arriving | `locked/plate_TRAIN.png` (candidate) |
| `Horror Movie Image (2).png` | metro (Notion "Metro" section) | `locked/plate_LOC-01.png` (candidate) |
| `Horror Movie Image - Metro.png` | metro | candidate LOC-01 / LOC-02 |
| `Horror-Movie-Image-Chambre-haussmanien.png` | Haussmann room | `locked/plate_LOC-05.png` (candidate) |
| `Horror Movie Image.png`, `Horror Movie Image (1).png`, `Horror Movie Image (3).png`, `Horror Movie Content.webp` | unclassified — **TODO: open and sort** | ? |

## 2. Notion page images — downloaded ✅ → `02_refs/notion/`
All 65 media of the *Le Dernier Reflet* page (59 images, 3 « Exemple de résultat », 2 test videos, 1 MP3), renamed `NN_<code>_<what>.ext` in page order.
**Full list with description, Notion section and target shots: `notion/index.csv`.** `tools/reflet.py prompt <id>` prints the matching images for each shot (column `notion_refs` in `shotlist.csv`).
Shot mapping was done from thumbnails: a first pass to confirm by eye.

| Key file | What | Use |
|---|---|---|
| `60_storyboard_original_39.png` | **original 39-frame storyboard — V4 source of truth** | `locked/storyboard.png` (linked) · animatic base |
| `07_H_sheet_turnaround.png` | heroine turnaround (4 views + 3 faces) | → `locked/H_sheet.png` candidate |
| `24_N_blonde_turnaround.png` | blonde second passenger sheet | → `locked/N_sheet.png` *if* the team picks blonde |
| `44/46/47/48_C_carriage_*.png` | creature in the carriage, far → near (red eyes) | shots 14 → 16 → 17, 26 |
| `21/22_M_*` | young man trapped in the mirror | shots 29b–30 |
| `34_TRAIN_arrival_front.png` | white/teal train, amber display | → `locked/plate_TRAIN.png` candidate |
| `36_LOC-01_sheet_nation_blue.png` | station Nation location sheet, blue (V3 palette) | → `locked/plate_LOC-01.png` candidate (32/33 = older yellow palette) |
| `42_LOC-02_carriage_axis_empty-a.png` | empty carriage on the creature axis | → `locked/plate_LOC-02.png` candidate |
| `51_LOC-04_corridor.png` | Haussmann corridor | → `locked/plate_LOC-04.png` candidate |
| `52_LOC-05_mirror-room.png` | room with the trumeau | → `locked/plate_LOC-05.png` candidate |
| `54_music_opening_ssstik.mp3` | opening track, 59 s (TikTok rip — **rights to check**) | shots 01–06 |
| `61/62_seq2_test_*.mp4` | sequence-2 test renders, 854×480 | reference only |
| `65_creature_dark-wraith_concept.png` | dark wraith concept | **not canon** — C is the pale-hooded creature |

Not found anywhere: a ghost-platform (LOC-03) image and a creature turnaround sheet in Notion → C_sheet comes from the HF bucket (`Horror Movie Image - La créature.png`); LOC-03 must be generated (`prompts/plates/LOC-03_sheet.txt` + key prompt `prompts/key/19.json`).
No PDF on the page (as of 2026-10-31 09:00 UTC).

## 3. `locked/` — the only folder generation calls read from
`storyboard.png` ✅ (symlink) · `H_sheet.png · C_sheet.png · M_sheet.png · N_sheet.png · plate_TRAIN.png · plate_LOC-01..05.png`
Promote a file only after the team approves it, and log the promotion in `05_video/log.md` (`LOCK | file | source | who approved`).
