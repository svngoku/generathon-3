#!/usr/bin/env bash
# Build the scene 06 → 07 rough cut from moving takes only (see 07_edit/scene06_edl.md).
# usage: bash 07_edit/build_scene06.sh <07_take.mp4> <out.mp4>
set -euo pipefail
cd "$(dirname "$0")/.."
T07=${1:?07 take}; OUT=${2:?out}
S=$(mktemp -d)
LB="scale=1920:1080,crop=1920:804:0:138,pad=1920:1080:0:138:black,fps=25,format=yuv420p,setsar=1"
DARK="eq=brightness=-0.06:contrast=1.08:saturation=0.9"
# 06a 3.0 s — walk (0–2.7 s slowed)
ffmpeg -loglevel error -y -ss 0 -t 2.7 -i 05_video/06a_v03a.mp4 -an -vf "setpts=PTS*1.111,$LB" -t 3 $S/1.mp4
# 06b 2.0 s — jump scare (cut on the lunge)
ffmpeg -loglevel error -y -ss 1.8 -t 2 -i 05_video/06b_v03b.mp4 -an -vf "$LB" $S/2.mp4
# 06c 2.0 s — startle → backs away → flicker (0.5–3.6 s at 1.55×)
ffmpeg -loglevel error -y -ss 0.5 -t 3.1 -i 05_video/06c_v03b.mp4 -an -vf "setpts=PTS/1.55,$LB" -t 2 $S/3.mp4
# 06d 3.0 s — lip sync; last 0.3 s the light dies (fade to black)
ffmpeg -loglevel error -y -ss 0.5 -t 3 -i 05_video/06b_v01.mp4 -an -vf "$LB,fade=t=out:st=2.6:d=0.25" $S/4.mp4
# E01 2.0 s — light stutters back: the street is empty (06d_v01, darkened to match)
ffmpeg -loglevel error -y -ss 0.5 -t 2 -i 05_video/06d_v01.mp4 -an -vf "$DARK,$LB,lutyuv=y=val*0.1:u=128+(val-128)*0.1:v=128+(val-128)*0.1:enable='lt(t,0.12)+between(t,0.28,0.42)+between(t,0.55,0.6)'" $S/5.mp4
# 07 3.0 s — empty stairs → she bursts in running
ffmpeg -loglevel error -y -ss 0 -t 3.6 -i "$T07" -an -vf "setpts=PTS/1.2,$LB" -t 3 $S/6.mp4
printf "file '%s'\n" $S/1.mp4 $S/2.mp4 $S/3.mp4 $S/4.mp4 $S/5.mp4 $S/6.mp4 > $S/l.txt
ffmpeg -loglevel error -y -f concat -safe 0 -i $S/l.txt -c copy $S/v.mp4
# sound: line from the lip-sync take at 7.0 s, team laugh + whispers after it
ffmpeg -loglevel error -y -ss 0.5 -t 4.7 -i 05_video/06b_v01.mp4 -vn -ar 48000 -ac 2 $S/line.wav
ffmpeg -loglevel error -y -ss 4.8 -i 06_audio/06b_voice_team_v01.mp3 -ar 48000 -ac 2 $S/tail.wav
ffmpeg -loglevel error -y -i $S/line.wav -i $S/tail.wav -filter_complex "[0:a]adelay=7000|7000[l];[1:a]adelay=10300|10300[t];[l][t]amix=inputs=2:normalize=0,apad[a]" -map "[a]" -t 15 $S/a.wav
ffmpeg -loglevel error -y -i $S/v.mp4 -i $S/a.wav -c:v copy -c:a aac -b:a 192k -shortest "$OUT"
rm -rf $S; ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT"
