# Model map — Le Dernier Reflet

**Four models only** (team decision, 2026-10-31):

| Role | Arcads tool · `model` | Limits read from the live schema (2026-10-31) |
|---|---|---|
| **Stills — characters (primary for H, C, M, N)** | `arcads_generate_image_gpt` · `model: "gpt-image-2-5-sunburst"` (GPT Image 2.5 Sunburst) | **up to 5 reference images** · aspect `21:9` available · 1–10 variants · 1–3 min · "tighter control across successive edits" → best high-fidelity character consistency, and for **editing an approved still** (VFX pass B, C moving closer 14→16→17) |
| **Stills A — environments, multi-ref compositions** | `arcads_generate_image_nano_banana` · `model: "nano-banana-2-1"` (Nano Banana 2.1) | **up to 14 reference images** · aspect `21:9` available · `resolution` 1K/2K/4K (default 2K) · `thinkingLevel` MINIMAL/MEDIUM/HIGH · 1–10 variants · ~1 min |
| **Stills B — A/B and environments** | `arcads_generate_image_seedream` · `model: "seedream_5_pro"` (Seedream 5.0 Pro) | **up to 4 reference images** · aspect only `1:1` / `16:9` / `9:16` · 1–10 variants · ~1 min, slower than lite |
| **Video — HD** | `arcads_generate_video_seedance_25` (Seedance 2.5) · `resolution: "1080p"` · `bitrateMode: "high"` | **4–30 s** per clip · aspect `16:9` / `4:3` / `9:16` (no 21:9) · **up to 30 reference images**, 10 ref videos, 10 ref audios · no explicit start-frame field · 1080p ≈ 2.5× the 720p price · ~7 min |

All calls go to brand **JUA** (`productId 1b5e7fe6-ac1f-414c-91a3-d9e32ff46634`, the only brand in the workspace) unless the team creates a "Le Dernier Reflet" brand. Credits at setup: **50 000**.

## Team rule (31/10 11:40): metro = Nano Banana only
Every metro image (LOC-01 station, LOC-02 carriage, LOC-03 ghost station, TRAIN, metro inserts) is generated with **Nano Banana 2.1** — it is more realistic and matches the Notion « Metro » section. **Seedream 5.0 Pro is not used for the metro.**

## Character consistency protocol (non-negotiable)
Consistency comes from **the same uploaded references on every call**, not from the prompt.

1. **Lock once, upload once.** Each approved file in `locked/` is uploaded to Arcads a single time; its S3 path goes into `locked/arcads_assets.json`. Every call reuses those exact paths (`tools/reflet.py prompt <id>` prints the `referenceImages` list ready to paste). Never re-upload a variant "to try"; never generate from an unapproved sheet.
2. **Reference order = priority:** ① the character sheet(s) of every character in the shot (H, C, M, N), plus the team's extra character images → ② the location plate → ③ the shot's storyboard frame / Notion draft (composition only) → ④ the previous approved shot of the same scene (continuity of light and wardrobe). Nano Banana takes all of them (≤ 14). **Sunburst takes 5 max** and **Seedream 4 max**: sheet(s) first, then plate, then storyboard — drop the rest.
3. **Prompt identity clause, word for word:** "the exact same [H/C/M/N description] from reference image 1; preserve face, hair, skin tone and costume". Two characters in one shot (24, 32b, 38): say which reference is which ("reference 1 = the heroine, reference 2 = the hooded creature"); never let one borrow the other's features.
4. **Elements (recommended):** create H, C, M (and N once decided) as **Elements** in Arcads Studio → Library → Elements. Then pass `elements: ["heroine", …]` + `@heroine` in the prompt on every model — the MCP can't create elements, only use them.
5. **Video inherits the approved still.** Seedance gets the approved keyframe as **reference image 1** ("the video starts exactly on reference image 1; keep composition, face and wardrobe identical"), then the character sheet(s), then the plate. Never animate from text alone.
6. **Drift check before approving** (stills and video): eyes, nose, mouth, jawline, hairline, curls volume, camel coat, bag, skin tone. Any drift → reject, don't fix in the next shot.
7. **C rules:** same pose and framing in 14/16/17 (reuse the 14 still as ref for 16 and 17, only the seat changes); C never walks on screen.

## Format rules
- **Stills:** Sunburst `aspectRatio: "21:9"`; Nano Banana `aspectRatio: "21:9"`, `resolution: "2K"` (4K for hero shots 09, 22, 24, 26, 37) → crop to **2.39:1** in the edit. Seedream `16:9` → crop top/bottom to 2.39:1: keep heads and key props inside the central 75 % height.
- **Video:** Seedance `16:9`, `1080p`, `bitrateMode: "high"`, **`audioEnabled: false`** (Marty does the sound design) — **except the lip-sync shots 06d and 37**: `audioEnabled: true` + the line's voice file in `referenceAudios` (ElevenLabs voice made first, see `06_audio/score.md`); the take's sound is replaced by the clean voice in the mix → crop to 2.39:1. Clips run ≥ 4 s: generate `gen_s` from `shotlist.csv` (shot length + 1 s handle, min 4 s) and trim in the edit.
- **VFX shots** (E05, E06, E10, 23, 24, 27, 28, 29b, 30, 31, 33, 37): pass A clean plate + pass B characters/reflection with the **same references and framing**, each animated separately, composited in the edit.
- **No generated text:** screens, signs and the line map are added in post.

## Per job
| Job | Stills | Video |
|---|---|---|
| Character sheets to complete (e.g. a C turnaround, N once decided) | gpt-image-2-5-sunburst ×2 from the team's images (≤5 refs) | — |
| Lock set: missing plates (LOC-03 ghost station, any plate the team rejects) | nano-banana-2-1 ×2 **and** seedream_5_pro ×2, compare | — |
| Inserts E01–E10 (no people) | seedream_5_pro ×2 (plate + storyboard frame) · nano-banana-2-1 ×2 | seedance 2.5, one discreet action |
| Shots with one character | **gpt-image-2-5-sunburst ×2** (sheet + plate + storyboard + previous shot, ≤5) · nano-banana-2-1 ×1 as B (all refs) | seedance 2.5, keyframe = ref 1 |
| Two characters (24, 32b, 38) | **gpt-image-2-5-sunburst ×2** (both sheets + plate + storyboard) · nano-banana-2-1 HIGH as B | seedance 2.5 per pass if VFX |
| Same frame, one change (VFX pass B from pass A · C closer in 16/17 from approved 14 · 23 from 22) | **gpt-image-2-5-sunburst edit**: approved still = ref 1, "change only …" | — |
| Fixing a good take | re-run the still with the same refs + a one-line correction | re-run seedance with the approved take as `referenceVideos` |

## Cost control
1. `arcads_get_credits` before each batch; write the balance in `05_video/log.md`.
2. **Stills are cheap, video is not:** approve every keyframe before any Seedance call.
3. Animatic from approved stills first (no video spend) → watch muted → then Seedance 1080p.
4. Seedance 720p is allowed only for quick motion tests that won't be in the cut; finals are 1080p high.


## Prompt structure (team rule 31/10 14:40)
Generate on Arcads, write like Higgsfield: Seedance 2.5 calls on Arcads use the Higgsfield skill's staged structure (`.claude/skills/higgsfield/skills/higgsfield-seedance-2-5/SKILL.md` § Core Prompt Formula, § Reference Roles, § Long Video, § Audio). On Arcads the **first referenceImage is the approved keyframe** (there is no start_image field) — declare it in the prompt as `@image1: the first frame`; then the character sheets, then the plates, in the order they are passed. Lint before every call (`seedance_lint.py --preflight --model seedance_2_5`).

### Identity lock — no storyboard faces (team rule 31/10 15:05)
Never attach a storyboard / Notion frame that shows a person to a generation of that character: the model copies the storyboard face (shots 12/13/15 v1 drifted this way). For H the refs are **H_sheet + an approved film frame of H** (06c_v03 `667aaf1b…`, then the approved 12) + an empty plate — composition goes in words only. Every close-up is checked side by side against the sheet front face before approval.
**Update 31/10 15:40 — H identity anchor = the team's frames.** The team's own H images are the reference look (deep dark-brown skin, slim oval face, curls worn half-up, camel coat, brown bag): `02_refs/notion/15_H_carriage_standing` (`ba2a7515…`), `19_H_carriage_wide-b` (`24f480bd…`), close-up variants `98_H_var` (`8811ef4b…`) and `101_H_var` (`fad9b837…`), plus 95–103 in Notion. They outrank H_sheet and the 06c/12v3 stills (those drifted lighter/rounder). Shot 10 = team frame 15 or 19 used as-is (no regeneration). Every carriage still of H attaches these four.
