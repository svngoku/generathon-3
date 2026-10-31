#!/usr/bin/env bash
# Download the reference assets from the Hugging Face bucket into dernier-reflet/02_refs/hf/ (git-ignored).
# Run from the repo root. Needs network access to huggingface.co (blocked in some cloud sandboxes:
# then use the Hugging Face MCP or download from a browser).
set -euo pipefail
BASE="https://huggingface.co/buckets/Svngoku/generathon-tech-arcads/resolve"
OUT="$(cd "$(dirname "$0")/.." && pwd)/dernier-reflet/02_refs/hf"
mkdir -p "$OUT"
AUTH=()
[ -n "${HF_TOKEN:-}" ] && AUTH=(-H "Authorization: Bearer $HF_TOKEN")
FILES=(
  "jeune-femme-character.png"
  "Jeune Femme Character from ElevenLabs.png"
  "Horror Movie Image - La créature.png"
  "Jeune Homme Character Horror Movie.png"
  "Metro Train Arrive.png"
  "Horror Movie Image - Metro.png"
  "Horror-Movie-Image-Chambre-haussmanien.png"
  "Horror Movie Image.png"
  "Horror Movie Image (1).png"
  "Horror Movie Image (2).png"
  "Horror Movie Image (3).png"
  "Horror Movie Content.webp"
)
for f in "${FILES[@]}"; do
  [ -s "$OUT/$f" ] && { echo "skip  $f"; continue; }
  enc=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$f")
  # the bucket may store the accented name decomposed (NFD) — try both forms
  enc_nfd=$(python3 -c 'import sys,urllib.parse,unicodedata;print(urllib.parse.quote(unicodedata.normalize("NFD",sys.argv[1])))' "$f")
  if curl -fsSL "${AUTH[@]}" -o "$OUT/$f" "$BASE/$enc" || curl -fsSL "${AUTH[@]}" -o "$OUT/$f" "$BASE/$enc_nfd"; then
    echo "ok    $f"
  else
    rm -f "$OUT/$f"; echo "FAIL  $f" >&2
  fi
done
echo "-> $OUT"
