# Generathon 3 × Paris Creator Week — agent instructions

Deadline: **Sun 2026-11-01 — 14:00 absolute** (our upload target 13:30, picture lock 11:00). Active project: **`dernier-reflet/`** — "Le Dernier Reflet", track **Three Minutes to Scare — horror short film**, **3:00 exact**, DV camcorder × anamorphic, **2.39:1**.

## Read first, in order
0. `dernier-reflet/00_brief/official_rules.md` — event rules, schedule, Notion contribution rules (overrides everything)
0b. `dernier-reflet/00_brief/Dossier_Generathon3_V4_reconcilie.pdf` (text: `dossier_v4.txt`) — **Marty's V4 production reference**: canon, edit sheet, all prompts, QA
1. `dernier-reflet/00_brief/brief.md` — logline, 5 sequences, canon decisions, **open decisions**
2. `dernier-reflet/01_bible/visual_bible.md` — camera lock, locations, characters, staging rules
3. `dernier-reflet/01_bible/shotlist.csv` — 55 shots (41 storyboard + 06a–06d + 10 inserts), timecodes, refs, models, outputs, status
4. `dernier-reflet/01_bible/prompts.md` — prompt rules + index of `prompts/`
5. `dernier-reflet/01_bible/model_map.md` — which Arcads tool does which job
6. `dernier-reflet/06_audio/score.md` — sound cue sheet
7. `dernier-reflet/02_refs/refs.md` — existing assets (HF bucket + Notion) → `locked/`

Phase-by-phase prompts: `dernier-reflet/AGENT_PROMPTS.md`. Full Notion text (source of truth, don't edit): `dernier-reflet/00_brief/notion_snapshot.md`.

## Track challenge (31/10) — must be visible in the film
- **Infinite Loop:** the last frame (39) cuts back into the first (01) — the window reflection becomes Paris. Generate 01 first; 39 is built from it.
- **On-screen lip sync:** 06d la Vieille (scene restaged 31/10 13:20: 06a walk · 06b she bursts out · 06c startle · 06d she speaks) « Le dernier métro ne ramène personne, ma fille. » (+ 37 « Aidez-moi… »). Voice first — **the team supplies every audio file itself (31/10 12:00); don't generate voices** — then Seedance with `referenceAudios` + audio on.
- **Viral for socials:** 2.39 master + 9:16 cut (`delivery/social_9x16.md`); close-ups keep the face in the centre third.

## The film in one line
A woman takes the last metro; an impossible passenger leads her to a mirror that steals reflections — and she becomes the bait for the next passenger. **Fear through reflections, never through explanation.**

## Hard rules (stop and ask rather than break one)
- **V4 is canon, V3 camera lock is mandatory.** Ignore older V2 / 35 mm / 16:9 wording.
- **The creature in the metro is C (hooded, red eyes), not the young man M.** M is flashback-only (29a, 29b, 30). Shot IDs are the V4 storyboard numbers + team additions 06a/06b.
- **La Vieille (V)** — team addition 31/10: only in the dark street (bursts out in 06b, speaks in 06d), she **warns** the heroine (lip sync), never touches her; her link to C left open; same sheet (`notion/67_V_sheet_turnaround.png`) every frame, no gore.
- **N is the blonde** (decided 31/10); the creature **devours her in 38** — stylised, lights cut at the impact, no visible gore.
- **C never moves on screen in the carriage** — position changes happen between cuts on one locked axis (14/16/17).
- **Never regenerate or alter an approved character sheet or plate.** Every call attaches the refs printed by `tools/reflet.py prompt <id>`.
- **No new visible characters** in inserts; no gore; no invented readable lettering (texts are composited in post).
- **VFX shots = two passes of the identical framing** (A clean / B anomaly), composited in the edit.
- **Don't invent the C ↔ M link** in any prompt; V4 leaves it open.
- **Runtime is 180 s exactly.** Never add a shot; `python3 tools/reflet.py check` must print OK.
- Notion rules: only prompts marked *Approuvé* go into the final film; name files `YYYY-MM-DD_sujet_v1`.

## How to work
- Start every session with `python3 tools/reflet.py check` and `python3 tools/reflet.py next`.
- Get prompts with `python3 tools/reflet.py prompt <id>`: Marty's KEY prompt (17 shots) + his ARCADS prompt (every shot), verbatim from the PDF, plus the refs to attach. Prompts are templates: adapt the action line to English if the model needs it, never change camera/identity clauses.
- **Audio:** off in every Seedance call except the lip-sync shots (06d, 37).
- **Models (fixed):** character stills = **GPT Image 2.5 Sunburst** (`gpt-image-2-5-sunburst`, primary for H/C/M/N and for edits of an approved still, ≤5 refs, 21:9); environments = **Nano Banana 2.1** (`nano-banana-2-1`, ≤14 refs, 21:9) + **Seedream 5.0 Pro** (`seedream_5_pro`, A/B, ≤4 refs, 16:9); video = **Seedance 2.5 at 1080p, bitrateMode high, audio off**. No other model without asking.
- **Character consistency:** follow the protocol in `01_bible/model_map.md` — same uploaded refs (asset ids in `locked/arcads_assets.json`) on every call, sheets first, storyboard frames = composition only (the storyboard heroine's skin tone differs from the sheet: the sheet wins), video always starts from the approved keyframe.
- Check credits (`arcads_get_credits`) before each batch; approve stills before any video spend.
- Final-candidate generations: **2 variants in parallel**, pick with a one-line verdict each.
- Log every call in `dernier-reflet/05_video/log.md`: `time | shot | pass | model | prompt | refs | output | verdict`.
- Save to the `frame_out` / `video_out` paths in `shotlist.csv` and move `status` `todo → draft → approved`.
- **Checkpoints — stop and show the team:** after refs, after each plate, after the animatic, after inserts, after each act block, after sound.
- Commit + push after each checkpoint (`feat(reflet): shots 14-17 stills v01`). Keep each file < 100 MB; large raw media stay out of git (see `.gitignore`).

## Definition of done
Muted, a stranger follows: last metro → impossible passenger → ghost station → mirror swaps her → she's trapped in the window as a new passenger sits down. With sound: the music dies at the bus stop, the gaps are silent, the whisper lands, three knocks on black. Exactly 3:00, `delivery/submission.md` filled, uploaded before 13:30.
