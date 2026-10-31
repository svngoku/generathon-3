# Visual bible — Le Dernier Reflet

Machine-readable version: `lock.json` (camera, locations, characters). This page is the human version. Source: Notion dossier §C, Master Lock V3, V4 §2/§4.

## Camera lock (V3 — validated, applies to every new render)
**DV camcorder, early 2000s · anamorphic · 2.39:1** · Tony Scott contrast, but a mostly *restrained* rhythm.
Subtle horizontal streaks, gentle halation, mild blooming, small-sensor DV depth of field (separation by light and haze), subtle MiniDV noise — **no** 35 mm grain.
**Never:** VHS scanlines, datestamps, heavy glitch, excessive noise, fake blur, video-game/CGI look, invented readable lettering.
Same camera texture everywhere (metro, corridor, room, mirror): environments and light change, the capture doesn't. JSON: `prompts/_camera_lock.json`.
Delivery: 2.39:1 picture letterboxed inside a 16:9 1920×1080 master (confirm with organisers).

## Locations
| ID | Set | Must stay constant | Palette | Plate (locked/) |
|---|---|---|---|---|
| LOC-01 | Active metro: stairs + tiled corridors + vaulted platform | wet stairs, white bevelled tile, long neons, French signage, **white & teal train**, amber display, blue haze, wet floor | graphite, teal, cold white | `plate_LOC-01.png`, `plate_TRAIN.png` |
| LOC-02 | Night carriage | same seat plan, bars, grips, windows, line map | steel, blue-grey, cold fluorescent | `plate_LOC-02.png` |
| LOC-03 | Ghost platform | cracked tile, old posters, rusted benches, wooden door at the end | dirty ivory, mould green, distant amber | `plate_LOC-03.png` |
| LOC-04 | Haussmann corridor | damaged mouldings, portraits, parquet, wrought-iron stair | tobacco, dust beige, cold shadow | `plate_LOC-04.png` |
| LOC-05 | Mirror room | huge gilded trumeau over marble fireplace, herringbone parquet, hairline crack | tarnished gold, walnut, unstable amber, cold blue | `plate_LOC-05.png` |
| EXT-PARIS / INT-BUREAU / EXT-BUREAU / EXT-ARRET-BUS | Opening (shots 01–06) | *PROPOSITION — not in the Notion bible, defined in lock.json* | night blue + amber | — |

**Geography (proposition):** carriage doors open straight onto the ghost platform; the service door leads into the Haussmann corridor, then the room. **Never show a walk between these spaces** — the impossible join is part of the horror.

**Plate workflow:** one master image per set → derive every angle from it with the plate as image reference. Text alone never gives continuity. Location-sheet prompts: `prompts/LOC-0x_sheet.txt`. Priority plates with full prompts: `S01` train front · `S02` doors · `S03` corridor · `S04` room/mirror · `S05` hand under the glass (only after S04 is approved, from S04).

## Characters
| Code | Who | Reference sheet (→ `locked/`) | Shots |
|---|---|---|---|
| **H** | Heroine — young Black woman, voluminous curly hair, camel coat, dark crossbody bag; tired → disbelief → contained fear → panic | `H_sheet.png` ← `jeune-femme-character.png` | 02, 04–07, 10–13, 15, 18, 21–25, 27–28, 32–35, 39 |
| **C** | Creature — hooded, worn pale robe, altered face, red eyes | `C_sheet.png` ← `Horror Movie Image - La créature.png` | 14, 16, 17, 24, 26, 34, 40 |
| **M** | Young man, past victim — Black, short hair, grey t-shirt | `M_sheet.png` ← `Jeune Homme Character Horror Movie.png` | 29, 30, 31 |
| **N** | New passenger — ⚠️ **undecided** (blonde/light sweater vs brunette/dark) | `N_sheet.png` (after decision) | 38, 40 |

(Shot numbers = edit order in `shotlist.csv`, not storyboard numbers.) Never regenerate an approved sheet; never let a character drift. Do not use the generic Higgsfield "charcoal suit" woman for H.

## Staging rules
- **C never moves on screen in the carriage.** It changes position *between cuts* on the **same locked axis** (14 → 16 → 17): jump-cuts, not animation.
- **VFX shots** (`ref` contains VFX: E05, E06, E10, 23, 24, 27, 28, 30, 31, 32, 35, 39): generate **two passes of the identical framing** — A clean plate, B with the anomaly — and composite in the edit. `tools/reflet.py prompt <id> --pass A|B`.
- **One discreet action per insert** (drop, flicker, grip, dust, reflection); simple camera moves.
- **Post-production, not generation:** bus-cancelled notification, phone clock, impossible station on the line map, station names, the delayed reflection, the presence behind the mirror.
