// Keeps only the team audio files that exist in 06_audio/team (so renders never fail on a missing file).
import fs from 'node:fs';
const edl = JSON.parse(fs.readFileSync('src/edl_blk2.json', 'utf8'));
const have = new Set(fs.readdirSync('public/audio'));
const present = (edl.audio || []).filter((a) => have.has(a.file));
fs.writeFileSync('src/audio_present.json', JSON.stringify(present, null, 1));
console.log(`audio: ${present.length}/${(edl.audio || []).length} team files present`, present.map((a) => a.file));
