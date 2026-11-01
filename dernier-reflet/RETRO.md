# Retro — Le Dernier Reflet (Generathon #3, 31/10 → 01/11)

We did not win. The winner was **HARU!** (2:59.7, 1280×720). This file is for the next one.

## What the winner did that we did not
| | HARU! | Us (v08, 4:51) | Next time |
|---|---|---|---|
| Format | 3:00 exactly | 4:51 | Lock the runtime from day 1; every new scene must *replace* screen time, not add it. |
| Hook | 5 s: beautiful sunrise + voice-over « ils nous ont pris le jour » | 48 s of office before the first chill | Cold open in the first 5 s (flash-forward), then rewind. |
| Glue | First-person voice-over carries the whole film | Images + a few lines | Write a 5-line voice-over first; it is cheap and hides discontinuity. |
| Structure | Circular (same tower, same line at start and end), one arc: child → loss → protector | Many threads (creature, la Vieille, young man, mirror world, fight) | One protagonist, one want, one loss, one change. Cut every scene that does not move it. |
| Sound | Foley + music that follows emotion + silence before every shock | Each take's own Seedance/Perle sound, no global mix | Budget a real mix pass: one music bed, foley on key actions, 0.5 s of silence before shocks. |
| Hiding AI flaws | Implied violence (blood on the lens), close cutaways, darkness, fog | We showed more (hands out of the mirror, blood) | Suggest, don't show: cut on the impact, sound does the rest. |
| Consistency | Costume anchors (white cap, grey cardigan) | Camel coat (good) + locked sheets | Keep: costume anchors + locked sheets. |

## What worked for us
- Locked character sheets and the "team frames outrank sheets" rule kept the heroine consistent; the creature drifted once (26 v01) when a prompt asked for a "closed-lip grin" — **never describe a sheet character differently from the sheet**.
- Remotion EDLs (JSON per block, shotlist-order guard, two-pass VFX with masks/stills) made late re-cuts fast and safe.
- Fetching HF files through Arcads (`arcads_analyze_media` with the URL) when the proxy blocked Hugging Face.
- Gemini transcription (`arcads_analyze_media`, 0 credit) to cut on dialogue — but analyse **one video per call** (it merges several).

## What hurt
- Two pipelines in parallel (Arcads shots + Perle's scenes) → late replacements, duplicated beats ("ça boucle"), runtime creep. Decide the backbone early.
- Quality: low-res exports (640×360 at 250 kb/s) mixed with 1080p; a global CSS grade applied to footage that should have been untouched; heavy delivery compression (crf 26). Fix: one delivery spec for everyone (1080p, ≥ 8 Mb/s), no grade on finished scenes, deliver crf ≤ 18.
- Credits: 1080p Seedance = 104 credits/s; 2 variants × 1080p burned most of the budget on block 3. Plan budgets per act; 1 variant for inserts.
- Rendering a 5-minute film takes ~20 min here: keep the final 90 min for render + checks + upload.

## The 3:00 cut (`edit_remotion/src/edl_film_3min.json`, composition `Film3min`)
Cold open (her scream behind the cracked glass) → Paris / office (« Il est tard… ») → la Vieille (« Le dernier métro ne ramène personne, ma fille. ») → the train → blackout + creature → ghost platform, door → ONE chase → cracked mirror → engulfed in the mud → the young man (« Je suis désolé ») → his engulfment → hall of mirrors (« Cours ! », the blonde) → « Il faut qu'on brise les miroirs » → fight (16 s) → door onto the crowded metro → **loop**: another girl alone in the last metro, the creature beside her, black at the impact. Exactly 180 s.
