#!/usr/bin/env bash
# Block 08-15 rough (E02 -> E06), 2.39 letterbox, cold grade. Timings = shotlist.csv (00:32-01:22).
# E05 (VFX, not generated yet) = 4 s black placeholder.  Usage: bash 07_edit/build_blk2.sh <out.mp4>
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="${1:-07_edit/rough/blk2_rough_v01.mp4}"
V=05_video; T=$(mktemp -d)
GRADE="eq=gamma=0.86:contrast=1.06:saturation=0.85"
DARK="eq=gamma=0.62:contrast=1.12:saturation=0.8"   # lights-out shots after 12: E06 panel must read as dark carriage
LB="scale=1920:1080,crop=1920:804:0:138,pad=1920:1080:0:138:black,setsar=1,fps=24"
# shot  file  in  dur
CUTS="E02 E02_v01.mp4 1.6 2
08 08_v01.mp4 0.5 3
E03 E03_v01.mp4 1.8 2
09 09_v01.mp4 0.0 5
10 10_v01.mp4 0.0 4
E04 E04_v01.mp4 0.0 4
11 11_v01.mp4 0.0 4
12 12_v01.mp4 0.5 3
13 13_v01.mp4 0.0 4
14 14_v02.mp4 0.0 5
E05 BLACK 0 4
15 15_v01.mp4 1.0 3
E06 E06_v01.mp4 1.0 3"
i=0; : > $T/list.txt
while read -r s f in d; do
  i=$((i+1)); o=$T/$(printf %02d $i)_$s.mp4
  if [ "$f" = BLACK ]; then
    ffmpeg -nostdin -v error -y -f lavfi -i color=black:s=1920x1080:r=24 -t $d -c:v libx264 -pix_fmt yuv420p $o
  else
    ffmpeg -nostdin -v error -y -ss $in -i $V/$f -t $d -an -vf "$( [ "$s" = E06 ] && echo "$DARK" || echo "$GRADE"),$LB" -c:v libx264 -crf 17 -pix_fmt yuv420p $o
  fi
  echo "file '$o'" >> $T/list.txt
done <<< "$CUTS"
mkdir -p "$(dirname "$OUT")"
ffmpeg -nostdin -v error -y -f concat -safe 0 -i $T/list.txt -c copy "$OUT"
ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT"
