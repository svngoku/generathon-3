# Le Dernier Reflet — montage Remotion (team rule 31/10 16:30)

The edit is done in Remotion, driven by one EDL JSON per block. No more ffmpeg trims by hand.

- `src/edl_blk2.json` — block 08→15 (E02…E06). One row per shot: `take` (file in `05_video/`, swap a/b takes here), `in`/`dur` (s), `focusY` (vertical position of the 2.39 crop: 0 = keep top, 0.5 = centre, 1 = keep bottom), `grade` (`normal` | `dark`).
- Master = native **1920×804 (2.39)**, 24 fps. Every shot is cropped with `object-fit: cover` + its own `focusY`, so faces/creature stay in frame instead of a blind centre crop.
- `public/video` → symlink to `../05_video` (takes are read in place).

```
npm install
npm run studio          # preview / scrub, tweak the EDL live
npm run render:blk2     # → ../07_edit/rough/blk2_remotion.mp4
```
Renders use the sandbox Chromium headless shell (`remotion.config.ts`). Runtime of a block = sum of `dur`; the film total must stay 180 s (`python3 tools/reflet.py check`).

## Transitions (team note 31/10 17:30 — cuts were too strict; Remotion skill `remotion-best-practices` → `remotion-markup/transitions.md`)
`edl_blk2.json` → `transitions`: one entry per cut, in shot order (`"A>B"`, checked at render).
- `fade` (TransitionSeries + `fade()`, linearTiming): continuity of place/time — corridor→platform, platform→detail, **train arrival → inside the carriage (20 frames)**, doors closing → ride. The two takes overlap, so the block gets shorter by the sum of the fades.
- `cut`: kept for shocks — power cut (11>12), torch/reveal (12>13>14), every move of C (15>16, E06>17) and the lights coming back (17>18).
- Sound follows the picture: each take's own audio gets a volume envelope that fades in/out over the same frames as the dissolve (no audio jump at a dissolve, a clean jump at a hard cut).

## Blocks and the full film (31/10 19:00)
- `src/edl_blk1.json` — act 1 from the team's own takes, whole: Notion 93 (01-03), Notion 92 (02-05), Higgsfield street (06a-07). Opening music = Notion 54 as `A10` (rights to check), full over the silent 93, ducked under 92, hard stop on the street (`keys` + `stopAt` on the cue).
- `src/edl_blk2.json` — E02 -> 18 (Arcads/Seedance).
- Composition `Film` = Blk1 + Blk2 joined in `Root.tsx` (bridge `06a-07>E02` fade 10). `npm run render:film`.
- Cue fields: `keys` = volume keyframes `[shotId, offset s, volume]`; `stopAt` = the cue stops dead when that shot starts.
