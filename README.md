# Le Dernier Reflet

**Generathon 3 × Paris Creator Week · Three Minutes to Scare — horror short film**
**Challenge: Infinite Loop + on-screen lip sync + viral for socials**
Paris, 31 Oct – 1 Nov 2026 · 3:00 · DV camcorder × anamorphic · 2.39:1 · Halloween 🎃

> Après l'annulation de son dernier bus, une jeune femme emprunte un métro nocturne presque vide. Un passager impossible la conduit jusqu'à une station oubliée, puis à une chambre où un miroir antique vole les reflets — et condamne ses victimes à attirer les suivantes.

## Quick start
```bash
python3 tools/reflet.py check        # 55 shots (V4 + dark street 06a–06d + loop 39) = 180 s
python3 tools/reflet.py next         # what to generate next (plates → inserts → acts → ending)
python3 tools/reflet.py prompt 14    # Marty's prompts + refs to attach (IDs: 01…39, 29a/29b/32a/32b, E01…E10)
python3 tools/reflet.py status       # progress, blocked shots
bash tools/fetch_refs.sh             # pull the existing reference images from the HF bucket
```
Agents: read `CLAUDE.md`, then paste the phases of `dernier-reflet/AGENT_PROMPTS.md`.

## The film in 5 sequences
| TC | Sequence | |
|---|---|---|
| 00:00–00:44 | Descendre | the last bus is cancelled; the deserted metro |
| 00:44–01:29 | Le passager | lights out; a hooded figure gets closer every time she looks away |
| 01:29–01:44 | La station fantôme | the doors open on a forgotten platform and a wooden door |
| 01:44–02:43 | La chambre et le reflet | her reflection stops obeying; the mirror takes her |
| 02:43–03:00 | Le cycle | a new passenger is devoured; the window's reflection becomes Paris → **infinite loop** |

## Repo map
```
CLAUDE.md                       agent rules (read first)
tools/reflet.py                 timeline check · status · next batch · prompt builder
tools/fetch_refs.sh             download reference assets from the HF bucket
dernier-reflet/
  00_brief/                     official_rules.md · brief.md · Dossier_Generathon3_V4_reconcilie.pdf (Marty's V4 reference) + dossier_v4.txt · notion_snapshot.md
  01_bible/                     shotlist.csv · visual_bible.md · lock.json · model_map.md · prompts.md
    prompts/                    key/ (17 PDF key JSON) · shots/ (51 PDF prompts) · soul/ (Notion JSON) · plates/
  02_refs/                      refs.md · notion/ (65 Notion images/videos/music + index.csv) · hf/ (bucket download, git-ignored)
  locked/                       approved character sheets + location plates — the only refs generation uses
  03_plates/                    location plate candidates
  04_frames/                    keyframe stills per shot ({id}_v01.png)
  05_video/                     takes per shot ({id}_v01.mp4) · log.md
  06_audio/                     score.md · music · whispers · sfx
  07_edit/                      animatic, cuts, final export
  delivery/                     submission.md (form, loglines, pitch, checklist)
  AGENT_PROMPTS.md              phase-by-phase prompts (0 kickoff → 7 delivery)
```

## Sources
PDF: `Dossier_Generathon3_V4_reconcilie.pdf` (Marty, V4 canon — the production reference).
Notion: [Generathon 3 × Paris Creator Week — Prompts & ressources](https://app.notion.com/p/3fd132c9cb37809b9ceff5fe9e711d32) → Bibliothèque de prompts → *Le Dernier Reflet* (dossier V2 → Master Lock V3 → storyboard canon V4) and *Miroir* (earlier draft).
Assets: Hugging Face bucket `Svngoku/generathon-tech-arcads`.
