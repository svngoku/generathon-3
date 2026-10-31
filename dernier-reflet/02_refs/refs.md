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

## 2. Notion-hosted only (not in the bucket)
On the *Le Dernier Reflet* page: cover, scenography board, the **original 39-frame storyboard** (source of truth for V4), multi-angle sheets of H, the second-girl sheets (N, AI face vs realistic), "Paris by night", "Entrée Métro", metro set variants, the opening-shot frames, two sequence-2 test videos, and the **opening music** (`ssstik.io_1792429257772.mp3`).
→ Download them from Notion into `02_refs/notion/` (git-ignored) and copy the approved ones into `locked/`. The Notion connector in this cloud session cannot fetch the files; do it from a browser.

## 3. `locked/` — the only folder generation calls read from
`H_sheet.png · C_sheet.png · M_sheet.png · N_sheet.png · plate_TRAIN.png · plate_LOC-01..05.png · storyboard.png`
Promote a file only after the team approves it, and log the promotion in `05_video/log.md` (`LOCK | file | source | who approved`).
