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

## Film order (team rule 31/10 19:20 — never lose the order of the videos)
The order is `01_bible/shotlist.csv`. `sync-audio.mjs` writes it to `src/shot_order.json`; `Root.tsx` refuses to build any composition whose shots are out of that order (ranges like `06a-07` count by their first id).
Current Film: 01-06 Perle best version (team, 31/10 19:41; replaces 93 + 92 and the A10 music cue — it carries its own mix; its two 0.13 s dips to black at 15.0 s and 38.4 s are the team's own) → 06a-07 Higgsfield street → E02 → 08 → E03 → 09 → 10 → E04 → 11 → 12 → 13 → 14 → E05 → 15 → 16 → E06 → 17 → 18. Next blocks append after 18 (19 → 39), in shotlist order.

## Blocks 3–5 (31/10 23:30) — the whole film
- `edl_blk3.json` 19 → E10 · `edl_blk4.json` 23 → 28 · `edl_blk5.json` 29a → 39. `Film` = Blk1 → Blk5 (220.9 s; running over 3:00 was validated by the team).
- Shot fields added: `takeB` may be a still in `04_frames` (`.png/.jpg`), `bMask` (CSS clip-path, e.g. the mirror glass), `bAt`/`bDur` (dissolve timing; `bDur: 0` = B from the first frame), `bIn` (B in-point), `zoom` + `zoomOrigin` (push-in), `blackAt` (picture cuts to black, 38), take `BLACK` (storyboard 34 only).
- 23: the frozen reflection = frame 0 of the same take masked to the glass. 39: push into the window of 37, dissolving into frame 0 of `01-06` → the last frame is the first frame (infinite loop).
- Team audio cues still to drop into `06_audio/team/`: `A18_whisper-place_v1.wav` (32a), `A19_aidez-moi.wav` (37), `A20_three-pulses_v1.wav` (39). They play automatically once present.

## Film v05 (01/11) — the team's Perle scenes, ending on their final scene
`src/edl_film_perle.json` (composition `Film`; the previous cut stays as `FilmV03`). Story order, whole takes, each with its own sound:
01-06 Perle opening → P1 rain alley / la Vieille (06a-07) → E02→E04 station + train (mine) → P2 carriage power cut / creature (11-18) → P3 she panics as the train stops (19) → P4 ghost platform, door, corridor (E07-21) → P5 mirror, creature behind her reflection (22-26) → P6 phone, clawed hand, scream, search for the exit (27-28) → P8 the young man (29a-30) → P9 mirror smashed, hands out of the glass (31-33) → 34 black → 35-39 (mine: same train, new passenger, trapped window, attack, loop to the opening).
v05: … → P9 (31-33) → P10 final fight (34-38) → P11 final scene, wooden door → crowded metro (39). The film ends there.

## Film v06 (01/11) — team notes on v05 + 5 new scenes
Mirror act: P4 door/corridor → P6 phone, clawed hand, scream, search for the exit → N3 chase → P5 the creature behind her reflection → N5 back at the mirror, engulfed into the mud → N4 mirror world, she meets the young man → **N2 his own engulfment (flashback)** → N1 hall of mirrors → P8 the two of them → P9 mirror smashed → P10 final fight → P11 door → crowded metro. 308 s. v05 = `edl_film_v05.json` (composition `FilmV05`).
