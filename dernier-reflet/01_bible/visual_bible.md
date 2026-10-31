# Visual bible — Le Dernier Reflet

Machine-readable version: `lock.json` (camera, locations, characters). This page is the human version. Source: Notion dossier §C, Master Lock V3, V4 §2/§4.

## Camera lock (V3 — validated, applies to every new render)
**DV camcorder, early 2000s · anamorphic · 2.39:1** · Tony Scott contrast, but a mostly *restrained* rhythm.
Subtle horizontal streaks, gentle halation, mild blooming, small-sensor DV depth of field (separation by light and haze), subtle MiniDV noise — **no** 35 mm grain.
**Never:** VHS scanlines, datestamps, heavy glitch, excessive noise, fake blur, video-game/CGI look, invented readable lettering.
Same camera texture everywhere (metro, corridor, room, mirror): environments and light change, the capture doesn't. JSON: `prompts/_camera_lock.json`.
Delivery: 2.39:1 picture letterboxed inside a 16:9 1920×1080 master (confirm with organisers).

## Metro look — keep it identical to Notion « Metro » (team rule 31/10)
Reference images: `notion/34_TRAIN_arrival_front.png` (train « 51 Pont de Sèvres »), `notion/39_LOC-01_platform_empty_blue.png` (empty platform Nation in fog), `notion/37_TRAIN_fog_side.png` (train side in fog) — locked as `plate_TRAIN`, `plate_LOC-01`, `plate_TRAIN_side`.
**DECISION A (team, 31/10 12:10): the nb21 board rules the whole metro.** Always: white bevelled-tile curved vault (as `plate_LOC-03` nb21_a) · fluorescent strip(s) along the vault · arched alcoves · cold blue fog · wet mirror-like floor · white-and-teal MF train, amber destination display · horizontal blue anamorphic flares · soft dark vignette. Active station (LOC-01) = the same tiled station clean and lit; ghost station (LOC-03) = the same, abandoned (peeling posters, debris, wooden door). Entrance = Guimard green ironwork (E01). Metro images: Nano Banana 2.1 only.

## Locations
| ID | Set | Must stay constant | Palette | Plate (locked/) |
|---|---|---|---|---|
| LOC-00 | Dark street to the metro (06a/06b) — *team addition* | wet cobbles, closed iron shutters, deep carriage doorways, one failing sodium streetlight, Métropolitain entrance glowing at the end | sodium amber, wet graphite, cold blue, oxblood accent | `plate_LOC-00.png` (prompt `plates/LOC-00_sheet.txt`) |
| LOC-01 | Active metro: stairs + tiled corridors + vaulted platform | wet stairs, white bevelled tile, long neons, French signage, **white & teal train**, amber display, blue haze, wet floor | graphite, teal, cold white | `plate_LOC-01.png`, `plate_TRAIN.png` |
| LOC-02 | Night carriage | same seat plan, bars, grips, windows, line map | steel, blue-grey, cold fluorescent | `plate_LOC-02.png` |
| LOC-03 | Ghost platform | cracked tile, old posters, rusted benches, wooden door at the end | dirty ivory, mould green, distant amber | `plate_LOC-03.png` |
| LOC-04 | Haussmann corridor | damaged mouldings, portraits, parquet, wrought-iron stair | tobacco, dust beige, cold shadow | `plate_LOC-04.png` |
| LOC-05 | Mirror room | huge gilded trumeau over marble fireplace, herringbone parquet, hairline crack | tarnished gold, walnut, unstable amber, cold blue | `plate_LOC-05.png` |
| EXT-PARIS / INT-BUREAU / EXT-BUREAU / EXT-ARRET-BUS | Opening (shots 01–06) | *PROPOSITION — not in the Notion bible, defined in lock.json* | night blue + amber | — |

**Geography (proposition):** carriage doors open straight onto the ghost platform; the service door leads into the Haussmann corridor, then the room. **Never show a walk between these spaces** — the impossible join is part of the horror.

**Plate workflow:** one master image per set → derive every angle from it with the plate as image reference. Text alone never gives continuity. Location-sheet prompts: `prompts/plates/LOC-0x_sheet.txt`. Priority plates (`prompts/plates/`): `S01` train front · `S02` doors · `S03` corridor · `S04` room/mirror · `S05` hand under the glass (only after S04 is approved, from S04).

## Characters
| Code | Who | Reference sheet (→ `locked/`) | Shots |
|---|---|---|---|
| **H** | Heroine — young Black woman, voluminous curly hair, camel coat, dark crossbody bag; tired → disbelief → contained fear → panic | `H_sheet.png` ← `notion/07_H_sheet_turnaround.png` (Marty removed the bucket `jeune-femme-character.png` from Notion on 31/10) | 02, 04–07, 06a, 10–13, 15, 18, 21–25, 27–28, 31, 32a, 32b, 33, 37 |
| **V** | **La Vieille** — very old woman, long straight silver-white hair, deeply wrinkled pale skin, milky pale-blue eyes, tattered oxblood shawls over a rust-brown dress, long wooden-bead necklace, bony hands, long yellowed nails, stone rings. Motionless, watching | `V_sheet.png` ← `notion/67_V_sheet_turnaround.png` · extras `68–70` | 06a, 06b (speaks, lip sync) — gone in 06d |
| **C** | Creature — hooded, worn pale robe, altered face, red eyes | `C_sheet.png` ← bucket `Horror Movie Image - La créature.png` (+ `notion/44–48_C_carriage_*`; `66_C_fullbody` = costume only: **no blood, no standing/walking pose**) | 14, 16, 17, 24, 26, 32b, 38 |
| **M** | Young man, past victim — Black, short afro hair, worn dark grey t-shirt; no hood, no red eyes | `M_sheet.png` ← bucket `Jeune Homme Character Horror Movie.png` · 10 new mirror shots `notion/71–80` (candles, gilded frame, cracked glass) = best refs for 29a/29b/30 | 29a, 29b, 30 |
| **N** | New passenger — **blonde** (decided 31/10): long wavy honey-blonde hair, fair freckled skin, cream-white knit sweater. **Devoured by C in 38** (stylised, lights cut) | `N_sheet.png` ← `notion/24_N_blonde_turnaround.png` · extras `81–88` | 36, 38 |

(Shot numbers = V4 storyboard IDs, as in `shotlist.csv` and the PDF.) Never regenerate an approved sheet; never let a character drift. Do not use the generic Higgsfield "charcoal suit" woman for H.

## Staging rules
- **Lip sync (challenge):** 06b and 37 — face centred, mouth clearly visible, voice file generated first and passed to Seedance.
- **Loop (challenge):** 39's last frame = 01's first frame. Generate and approve 01 before 39.
- **Vertical-safe:** close-ups keep the face in the centre third (9:16 punch-in, `delivery/social_9x16.md`).
- **C never moves on screen in the carriage.** It changes position *between cuts* on the **same locked axis** (14 → 16 → 17): jump-cuts, not animation.
- **VFX shots** (E05, E06, E10, 23, 24, 27, 28, 29b, 30, 31, 33, 37): clean plate + character/reflection passes with the **identical framing**, composited in the edit.
- **One discreet action per insert** (drop, flicker, grip, dust, reflection); simple camera moves.
- **Post-production, not generation:** bus-cancelled notification, phone clock, impossible station on the line map, station names, the delayed reflection, the presence behind the mirror.
