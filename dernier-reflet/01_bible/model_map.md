# Model map — Le Dernier Reflet

Rule of thumb (same as Generathon #2): **one locked reference set, reused by every call. Consistency comes from the refs, not from the prompt.**
Tool names are the Arcads MCP tools exposed in our sessions (`mcp__Arcads__arcads_*`). **Read each tool's schema live before its first call** (ref limits, durations, aspect ratios change) and note what you find at the bottom of this file.

## 1. Stills (plates, keyframes, inserts)
| Job | Primary | A/B · fallback | Notes |
|---|---|---|---|
| Location plates LOC-01…05, TRAIN | `generate_image_nano_banana` | `generate_image_gpt` | attach the existing bucket image as ref; Soul-Cinematic JSON from `prompts/plates/S0x.json` / `prompts/plates/LOC-0x_sheet.txt` (+ P19 key prompt for the ghost station) |
| Keyframes with H / C / M / N | `generate_image_nano_banana` | `generate_image_gpt` | refs = character sheet + location plate; reject any face/clothes drift |
| Inserts E01–E10 | `generate_image_nano_banana` | `generate_image_seedream` | ref = the plate of that location; **no people** |
| VFX two-pass frames | same model, **same seed/refs**, pass A then pass B | — | identical framing is what makes the composite work |
| Quick mood / layout drafts | `generate_image_grok` | — | never final |
| Upscale an approved still | `upscale_image` | — | before animating |

## 2. Motion
| Job | Primary | Fallback | Notes |
|---|---|---|---|
| **Animatic** (timing check, 51 shots) | stills on the TC grid in ffmpeg | `generate_video_seedance_20_mini` / `generate_video_grok_imagine_15` | cheap; watch muted before spending |
| Environment & insert motion (one discreet action) | `generate_video_seedance_25` start-frame | `generate_video_kling_30` | "locked-off / slow push-in", one action only |
| Shots with characters | `generate_video_kling_30` start-frame | `generate_video_seedance_25`, `generate_video_veo31` | keep moves simple; C does **not** move on screen in the carriage (jump-cuts) |
| Hero shots (09 train, 22 room reveal, 24 creature in mirror) | `generate_video_veo31` | `generate_video_kling_30_pro` | best instruction following |
| Fix a nearly-good take (artifact, drifting face) | `edit_video_seedance_25` | `generate_video_omni_flash` | keep shots/motion/timing, change only the defect |
| Extend a take that's 1 s short | `extend_video` | re-roll | |
| Final upscale | `upscale_video` | — | after picture lock only |

## 3. Sound
| Layer | Tool | Notes |
|---|---|---|
| Opening music (00:00–00:21, in the earbuds) | Notion track if cleared, else `create_music` (Arcads) or ElevenLabs music | must be cut dead at shot 06 |
| Whispers: « Tu peux prendre sa place, maintenant. » (33–34), « Aidez-moi… » (39) | ElevenLabs `creative_design_voice` → `creative_generate_speech` | the "Aidez-moi" voice = the heroine's, filtered behind thick glass |
| Room tone, metro, neons, glass, three knocks | video `audio` where the model offers it + SFX library | full cue sheet: `06_audio/score.md` |

## 4. Order of spend
1. `get_credits` → write the balance in `05_video/log.md`.
2. **Plates** (TRAIN, LOC-01…05) → team approval → `locked/`.
3. **Animatic** from stills on the shotlist grid → muted watch.
4. **Inserts** E01–E10 (cheap, no characters).
5. **Act 1–2** (01–20) → **Act 3** (21–36) → **Ending** (37–41, needs N).
6. Whispers + music + sound design → mix.
7. Fixes only on otherwise-approved takes. Upscale last.

## Live notes (fill in as you discover limits)
| Tool | max refs | durations | aspect ratios | cost | checked |
|---|---|---|---|---|---|
| | | | | | |
