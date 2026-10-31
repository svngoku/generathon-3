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
