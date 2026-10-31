# Generathon 3 × Paris Creator Week — agent instructions

Deadline: **Sun 2026-11-01 — 14:00 absolute** (our upload target 13:30, picture lock 11:00). Active project: **`dernier-reflet/`** — "Le Dernier Reflet", track **Three Minutes to Scare — horror short film**, **3:00 exact**, DV camcorder × anamorphic, **2.39:1**.

## Read first, in order
0. `dernier-reflet/00_brief/official_rules.md` — event rules, schedule, Notion contribution rules (overrides everything)
1. `dernier-reflet/00_brief/brief.md` — logline, 5 sequences, canon decisions, **open decisions**
2. `dernier-reflet/01_bible/visual_bible.md` — camera lock, locations, characters, staging rules
3. `dernier-reflet/01_bible/shotlist.csv` — 51 shots (41 storyboard + 10 inserts), timecodes, refs, models, outputs, status
4. `dernier-reflet/01_bible/prompts.md` — prompt rules + index of `prompts/`
5. `dernier-reflet/01_bible/model_map.md` — which Arcads tool does which job
6. `dernier-reflet/06_audio/score.md` — sound cue sheet
7. `dernier-reflet/02_refs/refs.md` — existing assets (HF bucket + Notion) → `locked/`

Phase-by-phase prompts: `dernier-reflet/AGENT_PROMPTS.md`. Full Notion text (source of truth, don't edit): `dernier-reflet/00_brief/notion_snapshot.md`.

## The film in one line
A woman takes the last metro; an impossible passenger leads her to a mirror that steals reflections — and she becomes the bait for the next passenger. **Fear through reflections, never through explanation.**

## Hard rules (stop and ask rather than break one)
- **V4 is canon, V3 camera lock is mandatory.** Ignore older V2 / 35 mm / 16:9 wording.
- **The creature in the metro is C (hooded, red eyes), not the young man M.** M is flashback-only (29–31).
- **C never moves on screen in the carriage** — position changes happen between cuts on one locked axis (14/16/17).
- **Never regenerate or alter an approved character sheet or plate.** Every call attaches the refs printed by `tools/reflet.py prompt <id>`.
- **No new visible characters** in inserts; no gore; no invented readable lettering (texts are composited in post).
- **VFX shots = two passes of the identical framing** (A clean / B anomaly), composited in the edit.
- **Shots 38 and 40 are blocked until the team chooses N.** Don't pick for them.
- **Runtime is 180 s exactly.** Never add a shot; `python3 tools/reflet.py check` must print OK.
- Notion rules: only prompts marked *Approuvé* go into the final film; name files `YYYY-MM-DD_sujet_v1`.

## How to work
- Start every session with `python3 tools/reflet.py check` and `python3 tools/reflet.py next`.
- Get prompts with `python3 tools/reflet.py prompt <id>` (verbatim Notion prompt when it exists, otherwise built from `lock.json` → translate the caption to English and review it before spending).
- Use the Arcads MCP; read each tool's schema before its first call and record limits in `model_map.md` (live notes). Check credits before each batch.
- Final-candidate generations: **2 variants in parallel**, pick with a one-line verdict each.
- Log every call in `dernier-reflet/05_video/log.md`: `time | shot | pass | model | prompt | refs | output | verdict`.
- Save to the `frame_out` / `video_out` paths in `shotlist.csv` and move `status` `todo → draft → approved`.
- **Checkpoints — stop and show the team:** after refs, after each plate, after the animatic, after inserts, after each act block, after sound.
- Commit + push after each checkpoint (`feat(reflet): shots 14-17 stills v01`). Keep each file < 100 MB; large raw media stay out of git (see `.gitignore`).

## Definition of done
Muted, a stranger follows: last metro → impossible passenger → ghost station → mirror swaps her → she's trapped in the window as a new passenger sits down. With sound: the music dies at the bus stop, the gaps are silent, the whisper lands, three knocks on black. Exactly 3:00, `delivery/submission.md` filled, uploaded before 13:30.
