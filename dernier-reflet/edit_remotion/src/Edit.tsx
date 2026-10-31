import React from 'react';
import {AbsoluteFill, Audio, Loop, OffthreadVideo, Sequence, staticFile, useCurrentFrame, interpolate} from 'remotion';
import present from './audio_present.json';

// sound: video file whose own audio plays under the shot (Seedance audio, team rule 31/10 16:50) — defaults to the take itself when it has audio.
export type Shot = {id: string; take: string | null; takeB?: string; sound?: string | null; soundVolume?: number; in: number; dur: number; grade: 'normal' | 'dark'; note?: string};
export type Cue = {file: string; at: string; offset: number; volume: number; loopUntil?: string};
export type Edl = {fps: number; shots: Shot[]; audio?: Cue[]};

// Cold DV grade: crushed blacks, desaturated. Full frame: no crop, no bars (team rule 31/10 16:45).
const GRADES: Record<Shot['grade'], string> = {
  normal: 'brightness(0.9) contrast(1.06) saturate(0.85)',
  dark: 'brightness(0.68) contrast(1.12) saturate(0.8)',
};
const frames = (s: Shot, fps: number) => Math.round(s.dur * fps);
export const totalFrames = (edl: Edl) => edl.shots.reduce((n, s) => n + frames(s, edl.fps), 0);

const Clip: React.FC<{file: string; startFrom: number; grade: Shot['grade']; opacity?: number}> = ({file, startFrom, grade, opacity = 1}) => (
  <AbsoluteFill style={{opacity}}>
    <OffthreadVideo src={staticFile(`video/${file}`)} startFrom={startFrom} muted
      style={{width: '100%', height: '100%', objectFit: 'contain', filter: GRADES[grade]}} />
  </AbsoluteFill>
);

const ShotView: React.FC<{shot: Shot; fps: number}> = ({shot, fps}) => {
  const f = useCurrentFrame();
  const d = frames(shot, fps);
  if (!shot.take) throw new Error(`Shot ${shot.id} has no take — no black placeholders allowed`);
  const start = Math.round(shot.in * fps);
  const snd = shot.sound ? <Audio src={staticFile(`video/${shot.sound}`)} startFrom={start} volume={shot.soundVolume ?? 1} /> : null;
  if (!shot.takeB) return <>{snd}<Clip file={shot.take} startFrom={start} grade={shot.grade} /></>;
  // VFX two-pass: identical framing, A (clean) dissolves into B (anomaly) over 1.5 s mid-shot.
  const b = interpolate(f, [d * 0.35, d * 0.35 + 1.5 * fps], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (<>
    {snd}
    <Clip file={shot.take} startFrom={start} grade={shot.grade} />
    <Clip file={shot.takeB} startFrom={start} grade={shot.grade} opacity={b} />
  </>);
};

export const Edit: React.FC<{edl: Edl}> = ({edl}) => {
  let from = 0;
  const starts: Record<string, number> = {};
  const ends: Record<string, number> = {};
  edl.shots.reduce((t, s) => { starts[s.id] = t; ends[s.id] = t + frames(s, edl.fps); return ends[s.id]; }, 0);
  return (
    <AbsoluteFill>
      {(present as Cue[]).map((c) => {
        const at = starts[c.at] + Math.round(c.offset * edl.fps);
        const until = c.loopUntil ? ends[c.loopUntil] : undefined;
        const src = staticFile(`audio/${c.file}`);
        return (<Sequence key={c.file} from={at} durationInFrames={until ? until - at : undefined} name={`♪ ${c.file}`} layout="none">
          {until ? <Loop durationInFrames={until - at}><Audio src={src} volume={c.volume} loop /></Loop> : <Audio src={src} volume={c.volume} />}
        </Sequence>);
      })}
      {edl.shots.map((shot) => {
        const d = frames(shot, edl.fps);
        const seq = (<Sequence key={shot.id} from={from} durationInFrames={d} name={shot.id}><ShotView shot={shot} fps={edl.fps} /></Sequence>);
        from += d;
        return seq;
      })}
    </AbsoluteFill>
  );
};
