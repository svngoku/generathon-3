# Generation log

One line per call (stills and video). `verdict`: keep / reject (why) / fix (what). Credits before each batch.

| time | shot | pass | model | prompt file | refs | output | verdict |
|---|---|---|---|---|---|---|---|
| 11:22 | LOC-00 plate | — | nano-banana-2-1 ×2 (21:9, 2K) | custom master-plate prompt (LOC-00) | ref_LOC-00_metro_entrance | 03_plates/LOC-00_nb21_a/b.png | a: entrance too small · **b: good**, blue entrance, doorway weak |
| 11:22 | LOC-00 plate | — | seedream_5_pro ×2 (16:9) | idem | ref_LOC-00_metro_entrance | 03_plates/LOC-00_sd5pro_a/b.jpg | a: good · **b: best porte cochère (arched, left) + Métropolitain centred** |
| 11:22 | LOC-03 plate | — | nano-banana-2-1 ×2 (21:9, 2K) | custom ghost-platform prompt | plate_LOC-01, plate_TRAIN | 03_plates/LOC-03_nb21_a/b.png | ❌ REJECTED (team 11:26): classic tiled vault ≠ Notion « Metro » look |
| 11:22 | LOC-03 plate | — | seedream_5_pro ×2 (16:9) | idem | plate_LOC-01 | 03_plates/LOC-03_sd5pro_a/b.jpg | ❌ REJECTED (team 11:26): same reason |
| 11:22 | 01 | — | nano-banana-2-1 ×2 (21:9, 4K) | key/01 + loop note | ref_01_paris_aerial | 04_frames/candidates/01_nb21_a/b.png | a: good · **b: best river reflections, darker sky (easier loop blend)** |
| 11:22 | 01 | — | seedream_5_pro ×1 (16:9) | key/01 | ref_01_paris_aerial | 04_frames/candidates/01_sd5pro_a.jpg | good, but 16:9 crop loses sky |
| 11:22 | voices | — | ElevenLabs design voice (eleven_ttv_v3) | V: very old woman, hoarse · H: young woman, whispering behind glass | — | 06_audio/voice_previews/*.mp3 | team to pick 1 V + 1 H |

| 11:27 | LOC-03 plate v2 | — | nano-banana-2-1 ×2 (HIGH) + seedream_5_pro ×2 | ghost platform in the Notion Metro look | plate_LOC-01 (#39), plate_TRAIN_side (#37), plate_TRAIN (#34) | 03_plates/LOC-03_v2_* | **TEAM PICK 11:35: nb21 board → nb21_a = plate_LOC-03, nb21_b = plate_LOC-03_alt; « NATION » sign to paint out in post** · (my earlier note: sd5pro_a: best — same geometry as #39, the wooden door replaces the kiosk** · sd5pro_b: door centred, best for shot 20 · nb21_a: good 21:9 but a « NATION » sign stays (fix in post) · nb21_b: more ruined, rusty sign |
| 11:31 | 06a | — | gpt-image-2-5-sunburst ×2 (21:9) | key/06a | H_sheet, V_sheet, plate_LOC-00 | candidates/06a_sunburst_a/b | **a: V readable in the doorway, H on model** · b: V too dark · gibberish sign on the entrance → paint out |
| 11:31 | 06b | — | gpt-image-2-5-sunburst ×2 | key/06b | V_sheet, V_extra_01/02, plate_LOC-00 | candidates/06b_sunburst_a/b | both on model · **b: face centred (vertical-safe)** |
| 11:31 | 06c | — | gpt-image-2-5-sunburst ×2 | key/06c | H_sheet, plate_LOC-00 | candidates/06c_sunburst_a/b | both on model · **b: face more centred** |
| 11:31 | 06d | — | nano-banana-2-1 ×2 (2K) | key/06d | plate_LOC-00 | candidates/06d_nb21_a/b | **a: same arch + metro entrance = continuity with 06a** · b: cleaner but different axis |
| 11:31 | voices | — | ElevenLabs eleven_v4 ×2 each | V2 « Le dernier métro… » · H1 « Aidez-moi… » | — | 06_audio/06b_voice_take*.mp3, 37_voice_take*.mp3 | 06b: take B 3.52 s → 06b_voice_v01.wav · 37: take A 1.28 s → 37_voice_v01.wav |
| 11:40 | 06b voice | — | ElevenLabs design voice ×3 (ttv_v3, « ~90 y.o., NOT whispering ») | V3 description | — | 06_audio/voice_previews/V_old_V3_0..2.mp3 | ❌ Gemini: 25–50 y., whispered/ASMR, 3–6/10 — designed voices can't sound 85+ |
| 11:43 | 06b voice | — | ElevenLabs eleven_v4 ×2 each, library voices Grandma Clo / michelle.ia / Seer Morganna, tag `[slow, ominous, low]` | 06b line | — | voice_previews/lib_*_A/B.mp3 | ❌ Gemini 20–45 y., whispered: the v4 tags push every voice into a whisper |
| 11:45 | 06b voice | — | ElevenLabs eleven_multilingual_v2 ×2 each, **no tags**, Grandma Clo `EMuO6fFLrXKOryHzij6K` + michelle.ia | 06b line | — | voice_previews/lib_clo_v2_A/B.mp3, lib_michelle_v2_A.mp3 | **clo_v2_A: Gemini 60–75 y., full voice, not whispered (best)** · clo_v2_B / michelle: whispered |
| 11:46 | 06b voice | — | ffmpeg post (vibrato/tremolo/pitch) | — | — | *_aged.wav, lib_clo_v2_A_light.wav | heavy pass = worse (reads as whisper) · light tremor = 40–55 y., full, « éraillée » · team listens: 06_audio/review/06b_vieille_voice_compare.mp3 |

## Credits
| time | balance | batch |
|---|---|---|
| 11:15 | 50 000 | before batch 1 |
| 11:26 | 49 952 | after batch 1 (plates + 01 + voices) |

## Locks (promotions to `locked/`)
| time | file | source | approved by |
|---|---|---|---|
| 11:20 | H_sheet, V_sheet (+V_extra_01/02), N_sheet (+N_extra_01), C_extra_01, plates TRAIN/LOC-01/02/04/05, refs 01 + LOC-00 | notion/07, 67–69, 24, 87, 48, 34, 36, 42, 51, 52, 56, 89 | Marty (« valide tout ») |
| 11:18 | C_sheet | HF bucket `Horror Movie Image - La créature.png` (fetched by Arcads) | Marty |
| 11:20 | M_sheet, M_extra_01 | notion/74, 77 — bucket M sheet rejected by Arcads (> 10 MB) | Marty |
