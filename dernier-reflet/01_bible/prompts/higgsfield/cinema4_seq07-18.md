# Higgsfield Cinema Studio 4.0 — séquences 07 → 18 (2 versions chacune)

Built with the higgsfield skill (`higgsfield-prompt` + `higgsfield-cinema` § Cinema Studio 4.0 + `higgsfield-seedance-2-5` staged blocks), same structure as the street prompt that worked (`scene06_cinema_studio.md`, team test `hf_20261031_143152`: 6 cuts in one generation, characters held).

**UI settings for every prompt below** (they stay OUT of the prompt text):
`Cinema Studio 4.0 · Video · 1080p · 16:9 · 15s · Sound On · Camera: DV Camcorder · Film setup / Color palette / Lighting: Auto · count 1/4 → 4 versions`

**Identity rule (team 31/10 15:40):** the Traveler = the team frames, not the old sheet. Always upload `02_refs/notion/15_H_carriage_standing.png` + `19_H_carriage_wide-b.png` (+ `98_H_var_970c4137.png` for close-ups). The street test used the sheet face (lighter, rounder) — add these two refs to the scene 06 prompt too so the woman of the street and the woman of the metro match.
**Creature rule (team 31/10 17:35):** the Hooded Figure always STANDS in the aisle, feet on the floor, never seated on nothing, never moving on screen — it only gets closer between cuts.

Lint (`seedance_lint.py --preflight --model seedance_2_5`): every rule passes except `overlength` (416–640 words) — that cap is the Seedance API's; Cinema Studio 4.0 accepted the ~790-word street prompt, so these lengths are fine in the Higgsfield UI.

Version A = faithful to the shot list (same shots as our Arcads cut). Version B = alternative staging, same story beats, to compare.

---

## Séquence 1 — Le quai (07 → E02 → 08 → E03 → 09 → 10) · 15 s

**Refs to upload** (order = @image numbers):
1. `04_frames/07_v02.png` — first frame (bottom of the metro stairs)
2. `02_refs/notion/19_H_carriage_wide-b.png` — the Traveler (identity)
3. `02_refs/notion/15_H_carriage_standing.png` — the Traveler (identity)
4. `04_frames/candidates/blk2/E02_a.png` — the tiled corridor
5. `04_frames/candidates/blk2/08_b.png` — the platform
6. `04_frames/candidates/blk2/09_a.png` — the train
7. `04_frames/candidates/blk2/10_team19.png` — inside the carriage (end frame)

### 1A — fidèle au découpage
```
[Generation Goal]
A 15-second horror sequence in six shots, one continuous night in an empty Paris metro station, from the bottom of the stairs to the inside of the last train. The central subject is the Traveler; the primary event is the last metro arriving in a deserted station and the Traveler stepping into an empty carriage.

[References]
@image1: the first frame — the bottom of the metro stairs, blue-lit. Keep its framing and light.
@image2: the Traveler — deep dark-brown complexion, slim oval face, long dark curls worn half-up, small stud earrings, camel wool coat over a black top, brown leather crossbody bag. Full-preserve face, hair, coat and bag. Do not take their backgrounds.
@image3: the same Traveler from another angle — identity only. Do not take its background.
@image4: the corridor — white bevelled tiles, curved vault, one long fluorescent tube, puddles. Use the place only.
@image5: the platform — vaulted white-tiled station, tracks on the left, black tunnel mouth, low blue fog, rain-soaked floor. Use the place only.
@image6: the train — white-and-teal Paris metro, round headlights, amber destination glow (no readable letters). Use the train only.
@image7: inside the carriage — striped seats, steel grab bars, the Traveler by the open doors. Use the carriage and her placement.
Exactly one person exists in the whole video: the Traveler.

[Stage 1 — 0-2 seconds]
Handheld follow shot behind her shoulder as she hurries off the last step into the tiled corridor, breathing hard, glancing back once.
End state: she turns the corner into the corridor.

[Stage 2 — 2-4 seconds]
Locked-off wide of the empty corridor. The fluorescent tube above stutters off and on three times; she passes under it toward the platform.
End state: she exits frame toward the platform, the tube steady again.

[Stage 3 — 4-7 seconds]
Very wide symmetrical shot down the deserted platform, slow push-in: blue fog drifts over the rain-soaked floor, a faint glow trembles deep in the tunnel mouth on the left. She enters frame and stops near the edge, small and alone.
End state: she waits, the tunnel glow growing.

[Stage 4 — 7-8 seconds]
Macro insert: a single drop falls into a puddle on the platform; ripples bend the reflection of the fluorescent tubes.
End state: the reflection still trembling.

[Stage 5 — 8-12 seconds]
Static 3/4 frontal shot from the platform edge: the train glides out of the tunnel on the left, headlights blooming through the fog, beams sweeping the floor, and brakes to a stop along the platform; its doors slide open on a lit, empty carriage.
End state: open doors, nobody aboard.

[Stage 6 — 12-15 seconds]
Inside the carriage, camera on the aisle: she steps through the open doors, glances back over her shoulder at the empty platform, wary, then faces down the empty aisle; the doors close behind her.
End state: she stands alone in the bright empty carriage, doors shut.

[Look]
Early-2000s DV camcorder texture, anamorphic-style horizontal blue flares, gentle halation, fine MiniDV noise, crushed blacks. Cold blue-teal fluorescent light everywhere; the only warm note is the amber glow above the train cab. Station clean and in service, completely deserted.

[Audio]
<her fast echoing footsteps on stone, then on tiles> <a fluorescent tube buzzing, three sharp electrical crackles> <deep metro rumble rising from the tunnel> <one amplified water drop with tiled reverb> <metal brakes screeching, a long pneumatic hiss> <sliding doors opening, then closing with a thud> <steady carriage hum>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
Keep the Traveler's face, curls, camel coat and brown bag identical in every shot; tracks on the left and the tunnel on the left in every platform shot; the train arrives from the left; nobody else on the platform or in the carriage.
```

### 1B — version alternative : plan-séquence subjectif
```
[Generation Goal]
A 15-second horror sequence in three long takes, one continuous night in an empty Paris metro station. The central subject is the Traveler; the primary event is her rushing alone through the station and the last metro arriving for her, as if it had been waiting.

[References]
@image1: the first frame — the bottom of the metro stairs, blue-lit. Keep its framing and light.
@image2: the Traveler — deep dark-brown complexion, slim oval face, long dark curls worn half-up, small stud earrings, camel wool coat over a black top, brown leather crossbody bag. Full-preserve face, hair, coat and bag. Do not take their backgrounds.
@image3: the same Traveler from another angle — identity only. Do not take its background.
@image4: the corridor — white bevelled tiles, one long fluorescent tube. Use the place only.
@image5: the platform — vaulted white-tiled station, tracks on the left, tunnel mouth, blue fog. Use the place only.
@image6: the train — white-and-teal Paris metro, round headlights, amber glow without letters. Use the train only.
@image7: inside the carriage. Use the place only.
Exactly one person exists in the whole video: the Traveler.

[Stage 1 — 0-6 seconds]
One continuous handheld take right behind her shoulder: she runs off the stairs into the corridor, the fluorescent tube flickers off above her and the corridor goes dark for a heartbeat, she keeps running, the light snaps back, she bursts out onto the empty platform and stops dead.
End state: she stands at the platform edge, out of breath, looking left into the tunnel.

[Stage 2 — 6-11 seconds]
Low wide shot from the floor, a puddle in the foreground reflecting her figure: a drop falls into it and her reflection ripples apart; behind her the train's headlights bloom out of the tunnel on the left, flood the fog and the train brakes to a stop, its lit, empty carriages sliding past her.
End state: the train stopped, doors opening behind her.

[Stage 3 — 11-15 seconds]
Inside the carriage, camera on the aisle: she steps in, looks back once at the deserted platform, then down the empty aisle; the doors close and the train jolts forward.
End state: she alone in the bright empty carriage, the platform sliding away in the glass.

[Look]
Early-2000s DV camcorder texture, anamorphic-style horizontal blue flares, gentle halation, fine MiniDV noise, crushed blacks. Cold blue-teal fluorescent light; warm amber only above the train cab. Station clean, in service, deserted.

[Audio]
<her running footsteps and ragged breath echoing> <a fluorescent tube crackling out and back> <a single drop with tiled reverb> <a rising tunnel rumble, brakes screeching, a long pneumatic hiss> <doors closing with a thud, the carriage jolting into motion>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
Keep the Traveler's face, curls, camel coat and brown bag identical throughout; the train arrives from the left; nobody else exists.
```

---

## Séquence 2 — La rame s'éteint (10 → E04 → 11 → 12 → 13 → 14) · 15 s

**Refs to upload:**
1. `04_frames/candidates/blk2/11v2_a.png` — first frame (seated, lit carriage)
2. `02_refs/notion/15_H_carriage_standing.png` — the Traveler (identity)
3. `02_refs/notion/98_H_var_970c4137.png` — the Traveler close-up (identity)
4. `04_frames/candidates/blk2/12v4_b.png` — her close-up in the dark
5. `04_frames/candidates/blk2/13v4_a.png` — the phone torch
6. `04_frames/candidates/blk2/14v3_standing.png` — the dark aisle, the Hooded Figure standing far away
7. `locked/C_sheet.png` — the Hooded Figure (identity)

### 2A — fidèle au découpage
```
[Generation Goal]
A 15-second horror sequence in six shots inside one moving Paris metro carriage at night. The central subjects are the Traveler and the Hooded Figure; the primary event is the carriage lights dying and her phone torch revealing a hooded figure standing at the far end of the aisle.

[References]
@image1: the first frame — the Traveler seated alone in the lit, empty carriage. Keep its framing and light.
@image2: the Traveler — deep dark-brown complexion, slim oval face, long dark curls worn half-up, camel wool coat, brown leather bag. Full-preserve. Do not take their backgrounds.
@image3: the same Traveler from another angle — identity only. Do not take its background.
@image4: her close-up in the dark carriage, lit from below by her phone. Use the framing and light.
@image5: her close-up with the phone torch on. Use the framing and light.
@image6: the dark aisle seen from her seat, a torch beam, the hooded figure standing at the far end. Use the place, the axis and the figure's position.
@image7: the Hooded Figure — worn pale hooded robe, shadowed face, two glowing red eyes, long clawed fingers. Full-preserve. Do not take the backdrop or the multi-view layout.
Exactly two beings exist: the Traveler and the Hooded Figure.

[Stage 1 — 0-3 seconds]
Static medium shot, side-on: the train is moving, tunnel lights streak across the dark glass panes behind her; she presses an earbud in, exhales, eyes on her phone.
End state: she relaxes, alone.

[Stage 2 — 3-4 seconds]
Insert: the hand straps sway together above the empty seats.
End state: straps swinging.

[Stage 3 — 4-7 seconds]
Close-up, frontal, locked camera on the aisle: with a dry electrical cut every carriage light dies; only the phone glow and passing blue tunnel lights touch her face. Her head snaps up, eyes wide, darting.
End state: she stares toward the lens, frozen.

[Stage 4 — 7-10 seconds]
Close 3/4: she switches on her phone torch and raises it; the hard white beam sweeps the dark aisle toward the lens, flaring it.
End state: the beam aims straight down the aisle.

[Stage 5 — 10-15 seconds]
Long-lens shot straight down the centre aisle from her seat, locked: in near-total darkness the torch beam lands on the Hooded Figure standing upright at the far end of the carriage, both feet on the floor, arms hanging, facing the lens, perfectly still, red eyes glowing under the hood.
End state: the figure unmoved in the beam.

[Look]
Early-2000s DV camcorder texture, anamorphic-style blue flares, halation around the torch, fine MiniDV noise, crushed blacks. Mood: dread, claustrophobic stillness. Cold fluorescent white before the cut, then darkness: only the phone glow, the torch and blue tunnel flicker.

[Audio]
<steady rail clatter and carriage rumble> <rubber straps creaking> <a dry electrical cut, the carriage hum dies> <her held breath> <the click of a phone torch> <an abnormal near-silence, a distant rail rumble, a faint electrical tick>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
Keep the Traveler's face, curls and coat identical in every shot; the Hooded Figure never moves on screen and stays standing; she and the figure never appear in the same shot; she sits facing the rear of the carriage, the figure is at the rear end of the aisle.
```

### 2B — version alternative : le reflet d'abord
```
[Generation Goal]
A 15-second horror sequence in five shots inside one moving Paris metro carriage at night. The central subjects are the Traveler and the Hooded Figure; the primary event is the lights dying and the Traveler first seeing the hooded figure as a reflection in the dark glass pane, then confirming it with her phone torch.

[References]
@image1: the first frame — the Traveler seated alone in the lit, empty carriage. Keep its framing and light.
@image2: the Traveler — deep dark-brown complexion, slim oval face, long dark curls worn half-up, camel wool coat, brown leather bag. Full-preserve. Do not take their backgrounds.
@image3: the same Traveler from another angle — identity only. Do not take its background.
@image4: her close-up in the dark, lit from below. Use the framing and light.
@image5: her close-up with the phone torch on. Use the framing and light.
@image6: the dark aisle seen from her seat with the hooded figure standing at the far end. Use the place, the axis and the position.
@image7: the Hooded Figure — worn pale hooded robe, shadowed face, two glowing red eyes. Full-preserve. Do not take the backdrop or the layout.
Exactly two beings exist: the Traveler and the Hooded Figure.

[Stage 1 — 0-3 seconds]
Static medium shot: she rides alone, earbud in, eyes on her phone, tunnel lights streaking past the dark glass pane beside her.
End state: calm, alone.

[Stage 2 — 3-5 seconds]
Close-up: every carriage light dies with a dry electrical cut; her face lit only by the phone, eyes lifting.
End state: she stares into the dark.

[Stage 3 — 5-9 seconds]
Over-the-shoulder toward the dark glass pane beside her: in the black glass, her own faint reflection, and behind it, far down the reflected aisle, a pale hooded figure standing, red eyes glowing. She does not turn yet; her reflection's eyes widen.
End state: the reflected figure, still, in the glass.

[Stage 4 — 9-11 seconds]
Close 3/4: she switches on the phone torch and turns it toward the rear of the carriage, the beam flaring the lens.
End state: the beam pointed down the aisle.

[Stage 5 — 11-15 seconds]
Long-lens shot straight down the aisle from her seat, locked: the beam lands on the Hooded Figure standing upright at the far end, feet on the floor, arms hanging, facing the lens, perfectly still, red eyes glowing.
End state: the figure unmoved in the beam.

[Look]
Early-2000s DV camcorder texture, blue flares, halation around the torch, MiniDV noise, crushed blacks. Mood: creeping dread, held breath. After the cut only the phone glow, the torch and blue tunnel flicker light the carriage.

[Audio]
<rail clatter and carriage rumble> <a dry electrical cut, the hum dies> <her breath catching> <the click of a phone torch> <near-silence, a distant rail rumble>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
Keep the Traveler's face, curls and coat identical; the figure stays standing and never moves on screen; the reflection matches the real aisle position of the figure; she and the figure never share a shot outside the reflection.
```

---

## Séquence 3 — Le passager (14 → E05 → 15 → 16 → E06 → 17 → 18) · 15 s

**Refs to upload:**
1. `04_frames/candidates/blk2/14v3_standing.png` — first frame (figure standing far)
2. `04_frames/candidates/blk2/16v2_standing.png` — figure standing mid-distance (same axis)
3. `04_frames/candidates/blk2/17v2_standing.png` — figure standing very close (same axis)
4. `04_frames/candidates/blk2/18_a.png` — lights back, empty carriage (same axis)
5. `locked/C_sheet.png` — the Hooded Figure (identity)
6. `02_refs/notion/98_H_var_970c4137.png` — the Traveler close-up (identity)
7. `04_frames/candidates/blk2/15v4_a.png` — her close-up looking at her phone

### 3A — fidèle au découpage
```
[Generation Goal]
A 15-second horror sequence in seven shots inside one dark Paris metro carriage. The central subjects are the Traveler and the Hooded Figure; the primary event is the figure getting closer every time she looks away, then vanishing when the lights come back.

[References]
@image1: the first frame — the dark aisle, torch beam, the Hooded Figure standing at the far end. Keep its framing and light.
@image2: the same axis with the figure standing at mid-distance. Use it for shot 4.
@image3: the same axis with the figure standing very close. Use it for shot 6.
@image4: the same axis, lights back on, aisle empty. Use it for the last shot.
@image5: the Hooded Figure — worn pale hooded robe, shadowed face, two glowing red eyes, long clawed fingers. Full-preserve. Do not take the backdrop or the layout.
@image6: the Traveler — deep dark-brown complexion, slim oval face, long dark curls, camel coat. Full-preserve. Not its background.
@image7: her close-up lit by her phone. Use the framing and light.
Exactly two beings exist: the Traveler and the Hooded Figure.

[Stage 1 — 0-3 seconds]
Locked long-lens shot down the aisle: the Hooded Figure stands far away in the torch beam, perfectly still.
End state: unchanged.

[Stage 2 — 3-5 seconds]
Insert: a dark glass pane reflects the empty carriage, but the reflected seats are subtly in the wrong place.
End state: the impossible reflection.

[Stage 3 — 5-7 seconds]
Close-up, frontal: she drops her eyes to her phone for one second, trembling, then lifts them back to the lens.
End state: her eyes on the lens.

[Stage 4 — 7-9 seconds]
The exact same locked axis as shot 1: the figure now stands much closer, at mid-distance, still not moving.
End state: unmoved.

[Stage 5 — 9-10 seconds]
Insert: on the line map above the door, one unknown station dot lights up amber between two stops.
End state: the amber dot glowing.

[Stage 6 — 10-12 seconds]
The exact same locked axis: the figure now stands right in front of the lens, hood and shoulders filling the frame, red eyes on the lens.
End state: unmoved, a breath of the hood.

[Stage 7 — 12-15 seconds]
The exact same locked axis: the fluorescent tubes stutter back on, the carriage is fully lit and completely empty.
End state: empty lit carriage.

[Look]
Early-2000s DV camcorder texture, halation around the torch beam, MiniDV noise, crushed blacks. Mood: suffocating dread, stillness. Darkness lit only by the torch and blue tunnel flicker until the last shot's cold fluorescent white.

[Audio]
<abnormal near-silence, a distant rail rumble> <a muffled low thud at each cut to the figure> <her trembling breath> <a small electronic click at the map> <a slow rasping breath very close in shot 6> <tubes buzzing back on with a click, steady carriage rumble>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
Shots 1, 4, 6 and 7 share one identical locked camera position and axis; the Hooded Figure always stands upright in the aisle, feet on the floor, and never moves on screen — it is only closer after each cut; she and the figure never share a shot.
```

### 3B — version alternative : stroboscope
```
[Generation Goal]
A 15-second horror sequence inside one pitch-dark Paris metro carriage, built on flickering light. The central subjects are the Traveler and the Hooded Figure; the primary event is the carriage lights strobing, the figure standing closer at each flash, then the lights steadying on an empty carriage.

[References]
@image1: the first frame — the dark aisle with the Hooded Figure standing at the far end. Keep its framing and light.
@image2: the same axis, figure standing at mid-distance.
@image3: the same axis, figure standing very close.
@image4: the same axis, lights on, aisle empty.
@image5: the Hooded Figure — worn pale hooded robe, shadowed face, two glowing red eyes. Full-preserve. Do not take the backdrop or the layout.
@image6: the Traveler — deep dark-brown complexion, slim oval face, long dark curls, camel coat. Full-preserve. Not its background.
Exactly two beings exist: the Traveler and the Hooded Figure.

[Stage 1 — 0-4 seconds]
Locked long-lens shot down the aisle, total darkness except the torch: the figure stands far away. The beam dies; black for half a second.
End state: darkness.

[Stage 2 — 4-6 seconds]
Close-up of the Traveler in the dark, lit only by her shaking phone screen, whispering breath, eyes searching the black.
End state: her face, frozen.

[Stage 3 — 6-12 seconds]
Back to the exact same locked axis: the ceiling tubes strobe on and off; at each flash the figure stands a little closer along the aisle — far, then mid-distance, then right in front of the lens — never seen moving, only already there.
End state: on the last flash, the hood fills the frame, red eyes on the lens.

[Stage 4 — 12-15 seconds]
Same locked axis: the tubes catch and burn steady; the carriage is fully lit and completely empty.
End state: empty lit carriage.

[Look]
Mood: panic, held breath. Early-2000s DV camcorder texture, hard flicker, halation, MiniDV noise, crushed blacks; cold fluorescent white at each flash and at the end.

[Audio]
<near-silence> <her shaky breath> <fluorescent tubes buzzing and snapping at each flash> <a muffled thud on each flash> <a rasping breath very close on the last flash> <tubes settling, steady rail clatter>
Diegetic sound only. No music. No dialogue.

[Maintain Consistency]
One identical locked camera position for every aisle shot; the figure is always standing, feet on the floor, and is never shown in motion — position changes only during the dark moments; she and the figure never share a shot.
```

---

## How to compare the versions
- Launch A and B of a sequence side by side with `1/4` (4 takes each) — 8 takes per sequence.
- Pick by: identity of the Traveler (vs team frames 15/19), the figure always standing and still on screen, eyelines (she looks toward the rear = the figure), no readable text.
- Drop the chosen takes in `05_video/` (`cs4_seq1A_t2.mp4` …): the Remotion EDL can take a whole 15 s sequence as one shot, or cut it per stage.
