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

// Film order = the order of shotlist.csv (team rule 31/10 19:20: never lose the order of the videos).
const order = fs.readFileSync('../01_bible/shotlist.csv', 'utf8').split('\n').slice(1).map((l) => l.split(',')[0]).filter(Boolean);
fs.writeFileSync('src/shot_order.json', JSON.stringify(order));
