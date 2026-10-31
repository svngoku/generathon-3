#!/usr/bin/env bash
# Build the scene 06 → 07 rough cut from moving takes only (see 07_edit/scene06_edl.md).
# usage: bash 07_edit/build_scene06.sh <07_take.mp4> <out.mp4>
set -euo pipefail
cd "$(dirname "$0")/.."
T07=${1:?07 take}; OUT=${2:?out}
S=$(mktemp -d)
LB="scale=1920:1080,crop=1920:804:0:138,pad=1920:1080:0:138:black,fps=25,format=yuv420p,setsar=1"
# team 14:16: dark from the very first frame — one grade for the whole scene, stronger on the brighter takes
GRADE="eq=gamma=0.82:contrast=1.06:saturation=0.88"
DARK="eq=gamma=0.68:contrast=1.1:saturation=0.85"
# 06a 3.0 s — lively handheld walk in the downpour (v04a, real speed — team 14:15)
ffmpeg -loglevel error -y -ss 0 -t 3 -i 05_video/06a_v04a.mp4 -an -vf "$GRADE,$LB" -t 3 $S/1.mp4
# 06b 2.0 s — build-up: empty street → she steps out of the doorway down the street → charges → lunge (team 14:15: less abrupt)
ffmpeg -loglevel error -y -ss 2.1 -t 1.84 -i 05_video/06b_v03a.mp4 -an -vf "setpts=PTS*1.111,$DARK,$LB" -t 2 $S/2.mp4
# 06c 2.0 s — startle → backs away → flicker (0.5–3.6 s at 1.55×)
ffmpeg -loglevel error -y -ss 0.5 -t 3.1 -i 05_video/06c_v03b.mp4 -an -vf "setpts=PTS/1.55,$GRADE,$LB" -t 2 $S/3.mp4
# 06d 3.0 s — lip sync; last 0.3 s the light dies (fade to black)
ffmpeg -loglevel error -y -ss 0.5 -t 3 -i 05_video/06b_v01.mp4 -an -vf "$DARK,$LB,fade=t=out:st=2.6:d=0.25" $S/4.mp4
# E01 2.0 s — light stutters back: the street is empty (06d_v01, darkened to match)
ffmpeg -loglevel error -y -ss 0.5 -t 2 -i 05_video/06d_v01.mp4 -an -vf "$DARK,$LB,lutyuv=y=val*0.1:u=128+(val-128)*0.1:v=128+(val-128)*0.1:enable='lt(t,0.12)+between(t,0.28,0.42)+between(t,0.55,0.6)'" $S/5.mp4
# 07 3.0 s — empty stairs → she bursts in running
ffmpeg -loglevel error -y -ss 0.9 -t 3.6 -i "$T07" -an -vf "setpts=PTS/1.2,$GRADE,$LB" -t 3 $S/6.mp4
printf "file '%s'\n" $S/1.mp4 $S/2.mp4 $S/3.mp4 $S/4.mp4 $S/5.mp4 $S/6.mp4 > $S/l.txt
ffmpeg -loglevel error -y -f concat -safe 0 -i $S/l.txt -vf "tpad=stop_mode=clone:stop_duration=0.2" -t 15 -c:v libx264 -crf 16 -pix_fmt yuv420p $S/v.mp4
# sound: line from the lip-sync take at 7.0 s, team laugh + whispers after it
ffmpeg -loglevel error -y -ss 0.5 -t 4.7 -i 05_video/06b_v01.mp4 -vn -ar 48000 -ac 2 $S/line.wav
ffmpeg -loglevel error -y -ss 4.8 -i 06_audio/06b_voice_team_v01.mp3 -ar 48000 -ac 2 $S/tail.wav
# team files (06_audio/AUDIO_REQUESTS.md) — each is mixed in at its sync point if it has been delivered
INPUTS=(-i $S/line.wav -i $S/tail.wav); FILT="[0:a]adelay=7000|7000[a0];[1:a]adelay=10300|10300[a1];"; MIX="[a0][a1]"; n=2
add(){ f=06_audio/team/$1; [ -f "$f" ] || return 0; INPUTS+=(-i "$f"); FILT+="[$n:a]aformat=channel_layouts=stereo,adelay=$2|$2,volume=$3[a$n];"; MIX+="[a$n]"; n=$((n+1)); }
add A00_rain-alley_amb_v1.wav 0 0.8
add A01_steps-splash_v1.wav 0 1.0
add A02_streetlight-buzz_v1.wav 0 0.6
add A03_shadow-noises_v1.wav 2500 1.0
add A04_jumpscare-stinger_v1.wav 4100 1.0
add A05_heroine-gasp_v1.wav 5000 1.0
add A07_run-stairs_v1.wav 12000 1.0
add A08_metro-rumble_v1.wav 14000 0.8
ffmpeg -loglevel error -y "${INPUTS[@]}" -filter_complex "${FILT}${MIX}amix=inputs=$n:normalize=0,apad[a]" -map "[a]" -t 15 $S/a.wav
echo "team audio files mixed: $((n-2))"
ffmpeg -loglevel error -y -i $S/v.mp4 -i $S/a.wav -c:v copy -c:a aac -b:a 192k -shortest "$OUT"
rm -rf $S; ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT"
