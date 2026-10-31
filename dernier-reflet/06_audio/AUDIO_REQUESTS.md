# Audio requests — what the team delivers (team rule 31/10 12:00: the team makes every audio file)

Drop the files in `06_audio/team/` with the exact names below. Each line says where the sound sits in the film (picture timecode), how long it should last, what it must sound like, and the one sync point the edit hangs on. Once a file is in, the build scripts (`07_edit/build_scene06.sh`, then the full edit) pick it up.

**Tech specs for every file:** WAV 48 kHz / 24-bit · peaks ≤ −6 dBFS, no limiter · **dry** (no reverb, no music) unless the line says otherwise — the room/echo is added in the mix so all sounds share one space · trim 0.2 s of silence before the sound starts, no fade-in · mono for voices and point sounds, stereo for ambiences · 2 takes per request when possible (`_take1`, `_take2`).

Status: ✅ delivered · ⏳ needed now (scene being cut) · ⬜ later block.

## Scene 06 → 07 — la ruelle (00:17–00:32) · current cut: `07_edit/rough/scene06_rough_v0x.mp4`

| ID | File to deliver | Shot · TC | Length | What it must sound like | Sync point / notes | Status |
|---|---|---|---|---|---|---|
| A00 | `A00_rain-alley_amb_v1.wav` (stereo) | 06a → 07 · 00:17–00:32 | 16 s, loopable | Heavy night downpour in a narrow stone street: dense rain on cobbles and puddles, water running in gutters and off iron shutters, distant city hum almost gone. No thunder, no music. | Bed under the whole scene; drops −6 dB in 06d (« the rain goes quiet ») and comes back on the empty street (E01 slot). | ⏳ |
| A01 | `A01_steps-splash_v1.wav` | 06a · 00:17–00:20 | 3.5 s | Her brisk footsteps on wet cobbles: low heels/boots, splashes in puddles, rhythm slightly faster than walking, one hesitant step at the end (she slows). | Steps in sync with the picture are cut in the edit; deliver a clean continuous run of ~8 steps. | ⏳ |
| A02 | `A02_streetlight-buzz_v1.wav` | 06a → E01 | 10 s + 3 one-shots | Old sodium streetlight: steady electrical buzz, plus **3 separate flicker events** (crackle + buzz cutting out, ~0.2 s each) and **1 "dies" event** (pop + buzz stops dead). | Flickers land on the light changes in 06a (end), 06c, and the light-out at the end of 06d; the "dies" event = cut to black. | ⏳ |
| A03 | `A03_shadow-noises_v1.wav` | 06a end → 06b start · 00:19.5–00:20.5 | 1.5 s | Out of the black doorway, very close and low: a raspy old breath, **wooden beads clicking**, a dry scrape of cloth on stone. Barely audible — the audience should doubt they heard it. | Starts 0.5 s before the cut to 06b; the rain must not be ducked for it. | ⏳ |
| A04 | `A04_jumpscare-stinger_v1.wav` | 06b · ~00:21.3 | 1.5 s (hit 0.1 s + tail) | Silence cut dead, then one violent impact: low thump + dry, harsh airy hiss (her hiss) + a short metallic screech. Not musical, no riser. | **Hit on the frame where her hand reaches the lens** (06b, ~1.3 s into the shot). Leave 0.3 s of true silence before the hit. | ⏳ |
| A05 | `A05_heroine-gasp_v1.wav` | 06c · 00:22–00:24 | 2 s | The heroine (same voice as 37): sharp inhaled gasp of terror, then ragged, trembling breathing as she backs away. No words, no scream. | Gasp on the first frame of 06c (her jolt). | ⏳ |
| A06 | `06b_voice_team_v01.mp3` — la Vieille | 06d · 00:24 → E01/07 | 10.45 s | « Le dernier métro… ne ramène PERSONNE… ma fille. » → laugh → « personne… » ×3 whispered. | Line lip-synced on 06d; laugh starts in the black after the light-out; whispers over the run (07). | ✅ |
| A07 | `A07_run-stairs_v1.wav` | 07 · 00:29–00:32 | 3.5 s | She bursts down the wet metro stairs: fast irregular steps on stone, a slip on a step, hand slapping the metal handrail, panicked breath, the sound becoming more reverberant as she goes down (we add the reverb — deliver dry). | Steps synced in the edit; the handrail slap ≈ 00:30.5. | ⏳ |
| A08 | `A08_metro-rumble_v1.wav` (stereo) | 07 → 08 · 00:31–00:35 | 5 s | A train's distant low rumble rising from below the stairs, under-the-ground air, no brakes yet. | Fades in under the end of 07 to carry us into the station (sound bridge to 08). | ⏳ |

## Rest of the film (same specs)

| ID | File | Shot · TC | Length | What it must sound like | Status |
|---|---|---|---|---|---|
| A10 | `A10_music-open_v1.wav` (stereo) | 01–06 · 00:00–00:17 | ~21 s | Earbud music (« The Reason » if rights are cleared, else an original lo-fi/urban, warm, everyday cue) **+ a band-passed "through earbuds" version**; ends on a hard cut, not a fade. | ⬜ |
| A11 | `A11_neon-crackles_v1.wav` | E02 · 00:32 | 2 s | Three neon crackles (the « three pulses » motif). | ⬜ |
| A12 | `A12_drop_v1.wav` | E03 | 1 s | One amplified water drop in a puddle, tiled reverb added in mix. | ⬜ |
| A13 | `A13_train-arrival_v1.wav` | 09–10 | 6 s | Realistic MF metro braking, door chime-less hiss, doors opening. | ⬜ |
| A14 | `A14_carriage-loop_v1.wav` | 11–18 | 30 s loop | Low carriage vibration, rubber grips creaking; plus one-shots: dry power cut, torch click, neons back on. | ⬜ |
| A15 | `A15_c-thuds_v1.wav` | 14/16/17 | 3 one-shots | A muffled thud at each of C's moves — **never footsteps**. | ⬜ |
| A16 | `A16_ghost-station_v1.wav` | 19–E08 | 15 s | Braking then empty air, dust, stale air, metal creak of the door handle. | ⬜ |
| A17 | `A17_room-mirror_v1.wav` | 21–33 | set | Parquet creaks, unstable light hum, very low frequency (24), first glass crack (27), suction (30), palm on glass (31), clean shatter (33). | ⬜ |
| A18 | `A18_whisper-place_v1.wav` | 32a–32b | 2.5 s | C's voice, intimate whisper close to the ear: « Tu peux prendre sa place, maintenant. » | ⬜ |
| A19 | `37_voice_v01.wav` — the heroine | 37 · lip sync | ≤ 4 s | « Aidez-moi… » as if behind thick glass. **The current file was generated before the 12:00 rule — the team to confirm it or replace it** (Seedance lip-syncs to it). | ⬜ |
| A20 | `A20_three-pulses_v1.wav` | 39 · 02:58–03:00 | 2 s | Three pulses on the window push-in, then hard cut → A10 restarts (the loop). | ⬜ |
