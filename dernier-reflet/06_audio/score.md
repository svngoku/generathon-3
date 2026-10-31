# Sound — Le Dernier Reflet

From Notion §F (V2), re-timed to the V4 edit. Sound carries half the fear: **the suspense lives in the gaps; don't fill them.**

## Cue sheet (V4 timecodes)
| TC | Shots | Sound |
|---|---|---|
| 00:00–00:18 | 01–05 | **Opening music in her earbuds** (Notion track, *rights to check*), distant city, keyboard, urban rain |
| 00:18–00:21 | 06 | music **chokes off** on "no taxi available" |
| 00:21–00:39 | E01–E03 | rain melts into a metro rumble · reverberant steps · **three neon crackles** (E02) · one amplified drop |
| 00:39–00:52 | 09–E04 | realistic braking · door hiss · rubber grips creaking |
| 00:52–01:29 | 11–18 | low carriage vibration · dry power cut · torch click + breath · **silence when C appears** · a muffled thud at each of C's moves (**never footsteps**) · electronic click (E06) · neons back on |
| 01:29–01:44 | 19–E08 | braking then empty air · dust, stale air · metal creak of the handle |
| 01:44–02:16 | 21–27 | parquet creaks · unstable light hum · room sound **drains away** (subtractive silence at 23) · very low frequency (24) · first glass crack (27) |
| 02:16–02:38 | 28–34 | breath in a dead room · old-sounding texture for the flashback · suction sound (31) · palm on glass (32) · **whisper behind her: « Tu peux prendre sa place, maintenant. »** (33–34) |
| 02:38–02:43 | 35–36 | clean shatter → **cut to absolute silence** (2 s black) |
| 02:43–02:58 | 37–40 | hyper-real normal metro sound returns · doors · **« Aidez-moi… »** as if behind thick glass (39) · weight on a seat (40) |
| 02:58–03:00 | 41 | **three knocks**, then total silence |

## Motif: three pulses
Three discreet impulses recur (neon E02 → metal → mirror cracks 27/35 → three knocks 41). Keep it a texture, **not a melody**.

## Voices
- « Tu peux prendre sa place, maintenant. » — low intimate whisper, off-screen, close to the ear (C's voice).
- « Aidez-moi… » — the heroine's voice, filtered: thick glass, slight low-pass, no reverb tail.
- Make both with ElevenLabs (design voice → generate speech), 2 takes each; log in `../05_video/log.md`.

## Music fallback (if the opening track can't be cleared)
Generate an original ~21 s earbud cue: lo-fi/urban, warm, ordinary-life feeling, ends on a cut (not a fade). Export also a "heard through earbuds" version (band-passed) for shots 02–05.

## Files
`06_audio/music_open_v01.wav` · `whisper_place_v01.wav` · `whisper_aidez_v01.wav` · `sfx/` · `mix_v01.wav` (final mix, -14 LUFS for online, check organiser specs).
