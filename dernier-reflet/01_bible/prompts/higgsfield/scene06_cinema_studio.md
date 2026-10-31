# Higgsfield Cinema Studio 4.0 — scene 06 → 07 (built with the higgsfield skill, `.claude/skills/higgsfield`)

Routing: higgsfield-prompt + higgsfield-cinema (§ Cinema Studio 4.0) + higgsfield-seedance-2-5 (staged long video, reference roles, bracket audio) + higgsfield-audio (lip-sync rules).
Both prompts pass `scripts/seedance_lint.py --preflight --model seedance_2_5` (2026-10-31; specs snapshot 35 days old — verify live).

Why two prompts (skill rule « split by JOB »): action/physics (walk, jump scare, startle, run) and dialogue/lip sync are two jobs; one generation half-does both. Prompt A = the whole scene in one generation; prompt B = the lip-sync shot alone (CU, locked camera, your voice file, no ambience tokens), cut into stage 4 in the edit.

## A — whole scene (one generation)
`Cinema Studio 4.0 · Mode: omni_reference · AR: 21:9 · Resolution: 480p (probe) → 1080p · Duration: 15s · Audio: On · Camera: Auto / Auto / Auto · Era: Auto · Genre: Horror if offered, else Auto · Pacing: Auto · Light: Auto · Palette: Auto`
Refs: start_image = `04_frames/06a_v03.png` · image_references: @image1 `locked/H_sheet.png` · @image2 `locked/V_sheet.png` · @image3 `locked/plate_LOC-00.png` · @image4 `04_frames/E01_v01.png`

```
[Generation Goal]
Generate a 15-second horror sequence in six shots, one continuous rainy night in one dark Paris back street. The central subjects are the Traveler and the Watcher; the primary event is the Watcher bursting out of the dark, warning the Traveler, vanishing, and the Traveler fleeing into the metro.

[References]
@image1: the Traveler — voluminous dark curly hair, camel wool coat, dark crossbody bag. Full-preserve face, hair and coat. Do not take the gray backdrop, the panel borders or the multi-view layout.
@image2: the Watcher — long straight silver-white hair, milky pale-blue blind eyes, deeply lined pale face, tattered oxblood shawls over a rust-brown dress, long wooden-bead necklace, bony hands with yellowed nails and stone rings. Full-preserve. Do not take the gray backdrop, the panel borders or the multi-view layout.
@image3: the street — rain-soaked cobblestones, a pitch-black carriage doorway on the left, closed iron shutters on the right, a small Art Nouveau metro entrance glowing blue-teal at the far end. Use the place only, not its people.
@image4: the metro stairs — green Art Nouveau railings, round lamps above a blue-lit doorway, white tiled walls. Use the place only.
Exactly one Traveler and one Watcher exist in the whole video.

[Stage 1 — 0-3 seconds]
Initial state: the Traveler hurries away from camera toward the glowing metro, head down in a downpour, boots splashing, coat flapping. Medium shot, handheld tracking right behind her shoulder.
End state: the streetlight ahead stutters; she slows for half a second, shoulders rising.

[Stage 2 — 3-5 seconds]
Her point of view down the street toward the metro, wide, locked-off static camera. The street is empty for a moment. The Watcher steps out of the black doorway further down, rushes toward the lens and lunges, bony hand thrust out, mouth open in a dry hiss, hair whipping; the camera jolts back.
End state: the Watcher's hand fills the foreground, her blind eyes on the lens.

[Stage 3 — 5-7 seconds]
Reverse angle, medium close-up, handheld: the Traveler faces the camera; behind her the dark street she came from, shutters now on the left, no metro glow. Sharp inhale through the mouth, eyes widen, body freezes, one hand flies to her chest; then she backs away step by step, gaze locked, breath shallow, hands trembling. The streetlight behind her flickers to near-black.
End state: she stands two steps back, frozen.

[Stage 4 — 7-10 seconds]
Close-up, locked-off static camera: the Watcher, face centred, motionless in the rain, the glowing metro far behind her. Her lips articulate every word of the line clearly. A thin cruel smile. The streetlight dies.
End state: black frame.

[Stage 5 — 10-12 seconds]
Wide, slow handheld drift: the light stutters back on over the same street toward the metro. The doorway is empty; the Watcher is gone.
End state: empty street, rain only.

[Stage 6 — 12-15 seconds]
High-angle medium-wide from the top of the metro stairs, static, then tilting down: the stairs are empty, then the Traveler bursts in from behind the camera and runs down, one hand on the rain-slick metal rail; halfway she whips her head back toward the street, petrified, then keeps running toward the blue door.
End state: she reaches the blue-lit doorway at the bottom.

[Look]
Early-2000s DV camcorder texture, anamorphic-style horizontal blue flares, gentle halation, fine MiniDV noise, crushed blacks. Dark from the first frame: only one flickering sodium-amber streetlight and the cold blue-teal metro glow light the scene. Heavy rain visible in every shot.

[Audio]
<dense heavy rain on cobbles and iron shutters throughout> <splashing hurried footsteps> <buzzing sodium streetlight that crackles at each flicker and dies with a pop> <from the doorway, a raspy breath and wooden beads clicking at the end of stage 1> <near-silence, then a violent impact: low thump, dry hiss, metallic screech, exactly as her hand reaches the lens> <the Traveler's sharp gasp and trembling breath in stage 3>
Dialogue language: French from Paris. In stage 4 the Watcher says slowly, in a low cracked very-aged voice: {Le dernier métro… ne ramène personne, ma fille.}
<a short dry cackle in the black> <fast echoing steps down stone stairs, a hand slapping the metal rail, panicked breathing, a whispered "personne… personne…" fading> <a low metro rumble rising from below>
Diegetic sound only. No music.

[Maintain Consistency]
Keep the Traveler's face, curls and camel coat, the Watcher's face, hair, shawls, necklace and rings, one Traveler and one Watcher, the street geography (metro ahead, doorway on the left, shutters on the right) and the two light sources consistent across all six shots. The Watcher never touches the Traveler.
```

## B — lip-sync shot (stage 4, replaces it in the edit)
`Cinema Studio 4.0 · Mode: omni_reference · AR: 21:9 · Resolution: 1080p · Duration: 6s · Audio: On · Camera: Auto / Auto / Auto · Era: Auto · Genre: Auto · Pacing: Auto · Light: Auto · Palette: Auto`
Refs: start_image = `04_frames/06b_v02.png` · image_references: @image1 `locked/V_sheet.png` · audio_references: @audio1 `06_audio/06b_voice_v01.wav` (the team line, 0–5.2 s)

```
@image1: the Watcher — long straight silver-white hair, milky pale-blue blind eyes, deeply lined pale face, tattered oxblood shawls, long wooden-bead necklace. Full-preserve. Do not take the gray backdrop, the panel borders or the multi-view layout.
@audio1: the Watcher's voice and her line. Audio @audio1 plays exactly as uploaded from 0s to end.
Starting from the provided first frame. Close-up, locked-off static camera. The Watcher stands motionless in the rain, face centred, blind eyes fixed on the lens. Her lips, jaw and teeth articulate every syllable of @audio1 in sync; between words her mouth closes. After the last word a thin cruel smile forms at one corner of her mouth.
Mood: cold, ominous horror. Early-2000s DV camcorder texture, fine MiniDV noise, crushed blacks, one sodium-amber streetlight on her face, the blue-teal metro glow far behind her.
```

## Unverified on 4.0 (the skill flags these — probe at 480p before spending 1080p)
- 4.0 has no multi-shot field: cuts are written in the prompt (Seedance 2.5 formula) — whether 4.0 honours the six shots is untested.
- The 512-character cap is documented for 2.5/3.0 only; if the 4.0 prompt box truncates prompt A, use the per-shot prompts of the previous version of this file, one generation per shot.
- Duration range for 4.0 is unpublished (Seedance 2.5: 4–30 s).
- Age words are removed on purpose (engine rule: age inference drifts) — the references carry the ages.

---
## Earlier drafts (before the skill)
# Higgsfield Cinema Studio — scene 06 (la ruelle de la Vieille)

Prompts include an **AUDIO** block (Higgsfield generates sound with the picture) — same sounds as `06_audio/AUDIO_REQUESTS.md` (A00–A05). Same rules as the rest of the film: DV camcorder × anamorphic 2.39:1, dark from the first frame, amber sodium streetlight + blue-teal metro glow only, heavy rain in every shot, geography per `01_bible/geography.md` (camera looks toward the metro; V appears AHEAD of H).

## 06a — she walks in the downpour (3 s)
- Start frame: `04_frames/06a_v03.png` · character ref: `locked/H_sheet.png` · set ref: `locked/plate_LOC-00.png`
- Camera: handheld tracking / follow from behind, shoulder height · lens: anamorphic, wide-normal · aspect 21:9 · duration 4–5 s

```
Night, a very dark narrow Paris back street in a torrential downpour. Close handheld tracking shot right behind a young Black woman with voluminous dark curly hair, camel wool coat and dark crossbody bag, walking briskly away from camera, head down against the rain, toward a small Art Nouveau metro entrance glowing blue-teal at the far end of the street. Heavy rain clearly visible as bright streaks and sheets crossing the frame, her footsteps splashing in puddles, wind flapping her coat, ripples on wet cobblestones, rain running down closed iron shop shutters on the right, a pitch-black empty carriage doorway on the left. Lighting: deep darkness, one weak flickering sodium-amber streetlight and the cold blue-teal glow of the metro far ahead. Near the end the streetlight stutters and she slows for a split second, tense. Early-2000s DV camcorder look, anamorphic 2.39:1, horizontal blue lens flares, gentle halation, subtle MiniDV noise, crushed blacks. Photorealistic psychological horror. She never looks back. One continuous shot, no cuts.
AUDIO: dense heavy rain on cobblestones and puddles, water gushing from gutters and drumming on the iron shutters; her brisk footsteps splashing (low boots on wet stone), the last step hesitant as she slows; the low electrical buzz of an old sodium streetlight that crackles and cuts out for a split second near the end; under the rain, barely audible, coming from the black doorway on the left: a raspy old breath, wooden beads clicking, a dry scrape of cloth on stone. No music, no voice, no thunder.
```
Negative: `no other people, no figure in the doorway, no readable text, no logos, no VHS scanlines, no CGI look, no bright lighting, no change to her face, hair or coat`

## 06b — la Vieille surgit (2 s, POV de l'héroïne)
- Start frame: `04_frames/06b_v03.png` (end pose) or the empty street `04_frames/06d_v02.png` (start) · character ref: `locked/V_sheet.png`
- Camera: static POV with a violent shake on the impact · lens: anamorphic · aspect 21:9 · duration 4 s

```
Night, point of view of a frightened woman looking down a very dark rain-soaked Paris back street toward a small metro entrance glowing blue-teal at the far end. For a beat the street is empty and silent, the sodium-amber streetlight flickering. Then a very old woman steps out of a pitch-black carriage doorway further down the street on the left — long straight silver-white hair, deeply wrinkled pale skin, milky pale-blue blind eyes, tattered oxblood shawls, long wooden-bead necklace, bony hands with long yellowed nails and stone rings — and charges toward the camera, then lunges straight at the lens, hand thrust out, mouth open in a dry hiss, hair whipping; the camera jerks back with a violent handheld shake. Heavy rain, deep blacks. Early-2000s DV camcorder look, anamorphic 2.39:1, gentle halation, subtle MiniDV noise, motion blur on the lunge. Photorealistic horror, no gore.
AUDIO: heavy rain and the buzzing, flickering streetlight; for a beat everything drops to near-silence (only the rain, softer); a faint rustle and wooden beads clicking as she steps out of the doorway; her fast dragging steps splashing as she charges; then on the lunge a violent jump-scare impact — a low thump, her dry harsh hiss and a short metallic screech — synced exactly to the moment her hand reaches the lens, followed by the frightened woman's sharp gasp off-screen. No music, no words.
```
Negative: `no blood, no gore, no other people, no readable text, no CGI look, no bright lighting`

## ONE PROMPT — the whole scene 06a → 07 (15 s, multi-shot)
References to attach: `locked/H_sheet.png` (heroine) · `locked/V_sheet.png` (la Vieille) · `locked/plate_LOC-00.png` (the street) · `04_frames/E01_v01.png` (the metro stairs) · optional start frame `04_frames/06a_v03.png`.
Settings: 21:9 · 15 s (or the max, then cut) · sound ON · multi-shot / cuts allowed.

```
A 15-second horror sequence in six shots, one continuous night, one location: a very dark, narrow Paris back street in a torrential downpour, leading to a small Art Nouveau metro entrance that glows blue-teal at the far end. Same look in every shot: early-2000s DV camcorder, anamorphic 2.39:1, horizontal blue lens flares, gentle halation, subtle MiniDV noise, crushed blacks, photorealistic psychological horror. The street is dark from the very first frame. Only two light sources ever: one old flickering sodium-amber streetlight and the cold blue-teal glow of the metro. Heavy rain is visible in every shot.

CHARACTERS (keep identical in every shot):
- THE YOUNG WOMAN: young Black woman, voluminous dark curly hair, camel wool coat, dark crossbody bag.
- THE OLD WOMAN: a very old woman, long straight silver-white hair, deeply wrinkled pale skin, milky pale-blue blind eyes, tattered layered oxblood shawls over a rust-brown dress, long wooden-bead necklace, bony hands with long yellowed nails and stone rings.

GEOGRAPHY (never break it): the young woman walks toward the metro; the old woman appears AHEAD of her, between her and the metro, out of a pitch-black carriage doorway on the left side of the street; iron shop shutters line the right side.

SHOT 1 (0–3 s) — Close, lively handheld tracking shot right behind the young woman as she hurries down the street toward the metro, head down against the downpour, footsteps splashing, coat flapping in the wind, rain streaking across the lens. The black doorway on the left is empty. The streetlight ahead stutters; she slows for a split second.
SHOT 2 (3–5 s) — Her point of view down the street toward the metro: empty, the rain softer, a beat of near-silence. The old woman steps out of the black doorway further down, charges toward the camera and lunges straight at the lens, bony hand with stone rings thrust out, mouth open in a dry hiss, milky eyes wide, hair whipping. The camera jerks back with a violent shake.
SHOT 3 (5–7 s) — Reverse angle from the old woman's position: the young woman faces the camera, she jolts, hand to her chest, eyes wide, then backs away step by step, petrified. Behind her the dark street she came from (shutters now on the left, no metro glow); the streetlight behind her flickers to near-black, blue spill on her face.
SHOT 4 (7–10 s) — Medium close-up of the old woman, face centred, motionless in the rain, the glowing metro far behind her. She speaks slowly, lips clearly articulating: « Le dernier métro… ne ramène personne, ma fille. » A faint cruel smile. Then the streetlight dies: cut to black.
SHOT 5 (10–12 s) — The light stutters back on: the same street toward the metro, empty. The old woman is gone. Only the rain.
SHOT 6 (12–15 s) — High angle at the top of the wet metro stairs (green Art Nouveau railings, round lamps above a blue-lit doorway, white tiled walls): the stairs are empty, then the young woman bursts into frame from behind the camera and runs down in panic, one hand on the wet handrail, coat flying; halfway she whips her head back toward the street, her face petrified, then keeps running down toward the blue door.

AUDIO (continuous, no music): dense heavy rain on cobblestones and shutters throughout; her splashing footsteps; the buzzing sodium streetlight that crackles at each flicker and dies with a pop before the black. End of shot 1: from the doorway, barely audible, a raspy old breath and wooden beads clicking. Shot 2: near-silence, then a violent jump-scare impact (low thump, dry hiss, short metallic screech) exactly when the hand reaches the lens. Shot 3: her sharp gasp and ragged trembling breath. Shot 4: the rain drops away; the old woman's voice, very old, low, slow, ominous, in French: « Le dernier métro… ne ramène personne, ma fille. » In the black: a short dry cackle that echoes into shot 5. Shot 6: her fast steps echoing down the stairs, a hand slapping the metal rail, panicked breathing, a whispered « personne… personne… » fading, and a low metro rumble rising from below.
```
Negative: `no gore, no blood, no extra people, no readable text or signage, no logos, no VHS scanlines, no CGI look, no bright lighting, no change to either woman's face, hair or costume, the old woman never touches the young woman`
Note: the old woman's voice in the final film is the team file (`06_audio/06b_voice_team_v01.mp3`); keep Higgsfield's audio for rain/SFX and replace her voice in the mix if it differs.
