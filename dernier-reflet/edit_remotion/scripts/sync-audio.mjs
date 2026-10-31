// Lists the team audio files that exist in 06_audio/team, across every EDL (renders never fail on a missing file).
import fs from 'node:fs';
const have = new Set(fs.readdirSync('public/audio'));
const wanted = new Set();
for (const f of fs.readdirSync('src').filter((f) => /^edl_.*\.json$/.test(f))) {
  for (const a of JSON.parse(fs.readFileSync(`src/${f}`, 'utf8')).audio || []) wanted.add(a.file);
}
const present = [...wanted].filter((f) => have.has(f));
fs.writeFileSync('src/audio_present.json', JSON.stringify(present, null, 1));
console.log(`audio: ${present.length}/${wanted.size} team files present`, present);
