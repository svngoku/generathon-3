# Sound — Le Dernier Reflet

**Marty owns the sound design** (PDF V4 §8). This page is the shared cue sheet.

From Notion §F (V2), re-timed to the V4 edit. Sound carries half the fear: **the suspense lives in the gaps; don't fill them.**

## Cue sheet (V4 timecodes)
| TC | Shots | Sound |
|---|---|---|
| 00:00–00:14 | 01–05 | **« The Reason » from the chorus, in her earbuds** (`02_refs/notion/54_music_opening_ssstik.mp3`, *sync + master rights to check*), distant city, keyboard, urban rain |
| 00:14–00:17 | 06 | music **chokes off** on "no taxi available" |
| 00:17–00:20 | 06a | rain, her quick steps on cobbles, a streetlight buzzing; an old voice calls out from the doorway |
| 00:20–00:23 | 06b | **the rain goes quiet** — la Vieille, on screen, lip sync: « Le dernier métro ne ramène personne, ma fille. » |
| 00:23–00:27 | 06c–06d | her breath, « Pardon… ? » barely audible → empty doorway: the streetlight buzzes and dies, silence |
| 00:27–00:39 | E01–E03 | rain melts into a metro rumble · reverberant steps · **three neon crackles** (E02) · one amplified drop |
| 00:39–00:52 | 09–E04 | realistic braking · door hiss · rubber grips creaking |
| 00:52–01:29 | 11–18 | low carriage vibration · dry power cut · torch click + breath · **silence when C appears** · a muffled thud at each of C's moves (**never footsteps**) · electronic click (E06) · neons back on |
| 01:29–01:44 | 19–E08 | braking then empty air · dust, stale air · metal creak of the handle |
| 01:44–02:16 | 21–27 | parquet creaks · unstable light hum · room sound **drains away** (subtractive silence at 23) · very low frequency (24) · first glass crack (27) |
| 02:16–02:38 | 28–32b | breath in a dead room · old-sounding texture for the flashback · suction sound (30) · palm on glass (31) · **whisper behind her: « Tu peux prendre sa place, maintenant. »** (32a–32b) |
| 02:38–02:43 | 33–34 | clean shatter → **cut to absolute silence** (2 s black) |
| 02:43–02:58 | 35–38 | hyper-real normal metro sound returns · doors · **« Aidez-moi… »** as if behind thick glass (37) · weight on a seat, the creature's jaw, **dry power cut on the attack** (38) |
| 02:58–03:00 | 39 | **three pulses** over the window push-in → the earbud music of 01 restarts on the cut: **the soundtrack loops with the picture** |

## Motif: three pulses
Three discreet impulses recur (neon E02 → metal → mirror cracks 27/33 → three pulses on the final black 39). Keep it a texture, **not a melody**.

## Voices (lip sync — record the voices BEFORE generating 06b and 37: Seedance lip-syncs to them)
- « Le dernier métro ne ramène personne, ma fille. » (06b, **on screen, lip sync**) — la Vieille: very old woman, low, hoarse, slow, intimate, French. ElevenLabs design voice → `06_audio/06b_voice_v01.wav` (≤ 3 s, the line must fit the 3 s shot).
- « Tu peux prendre sa place, maintenant. » — low intimate whisper, off-screen, close to the ear (C's voice).
- « Aidez-moi… » (37, **on screen in the window, lip sync**) → `06_audio/37_voice_v01.wav` — the heroine's voice, filtered: thick glass, slight low-pass, no reverb tail.
- Make both with ElevenLabs (design voice → generate speech), 2 takes each; log in `../05_video/log.md`.

## Music fallback (if the opening track can't be cleared)
Generate an original ~21 s earbud cue: lo-fi/urban, warm, ordinary-life feeling, ends on a cut (not a fade). Export also a "heard through earbuds" version (band-passed) for shots 02–05.

## Files
`06_audio/music_open_v01.wav` · `whisper_place_v01.wav` · `whisper_aidez_v01.wav` · `sfx/` · `mix_v01.wav` (final mix, -14 LUFS for online, check organiser specs).
