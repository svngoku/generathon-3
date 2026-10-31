import React from 'react';
import {AbsoluteFill, Audio, Loop, OffthreadVideo, Sequence, staticFile, useCurrentFrame, interpolate} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import present from './audio_present.json'; // names of the team audio files that exist

// sound: video file whose own Seedance audio plays under the shot (team rule 31/10 16:50).
export type Shot = {id: string; take: string | null; takeB?: string; sound?: string | null; soundVolume?: number; in: number; dur: number; grade: 'normal' | 'dark'; note?: string};
// One transition per cut, in film order. "fade" = cross-dissolve (picture AND sound overlap);
// "cut" = hard cut, kept for shocks (power cut, reveals, C moving between cuts). Remotion skill: TransitionSeries.
export type Transition = {cut: string; type: 'fade' | 'cut'; frames: number; why?: string};
// keys = volume keyframes [shotId, offset s, volume]; stopAt = the cue stops dead when that shot starts.
export type Cue = {file: string; at: string; offset: number; volume: number; loopUntil?: string; stopAt?: string; keys?: [string, number, number][]};
export type Edl = {fps: number; shots: Shot[]; transitions?: Transition[]; audio?: Cue[]};

// Cold DV grade: crushed blacks, desaturated. Full frame 16:9: no crop, no bars (team rule 31/10 16:45).
const GRADES: Record<Shot['grade'], string> = {
  normal: 'brightness(0.9) contrast(1.06) saturate(0.85)',
  dark: 'brightness(0.68) contrast(1.12) saturate(0.8)',
};
const frames = (s: Shot, fps: number) => Math.round(s.dur * fps);

const transitionAt = (edl: Edl, i: number): Transition | undefined => {
  const t = edl.transitions?.[i];
  if (!t) return undefined;
  const expected = `${edl.shots[i].id}>${edl.shots[i + 1]?.id}`;
  if (t.cut !== expected) throw new Error(`EDL transition #${i} is "${t.cut}", expected "${expected}" — keep transitions in shot order`);
  return t;
};
const tFrames = (t?: Transition) => (t && t.type === 'fade' ? t.frames : 0);

// Total = sum of shots − overlaps of the dissolves (Remotion TransitionSeries rule).
export const totalFrames = (edl: Edl) =>
  edl.shots.reduce((n, s) => n + frames(s, edl.fps), 0) -
  edl.shots.slice(0, -1).reduce((n, _s, i) => n + tFrames(transitionAt(edl, i)), 0);

const Clip: React.FC<{file: string; startFrom: number; grade: Shot['grade']; opacity?: number}> = ({file, startFrom, grade, opacity = 1}) => (
  <AbsoluteFill style={{opacity}}>
    <OffthreadVideo src={staticFile(`video/${file}`)} startFrom={startFrom} muted
      style={{width: '100%', height: '100%', objectFit: 'contain', filter: GRADES[grade]}} />
  </AbsoluteFill>
);

// fadeIn / fadeOut = length of the dissolve on each side, so the sound crossfades with the picture.
const ShotView: React.FC<{shot: Shot; fps: number; fadeIn: number; fadeOut: number}> = ({shot, fps, fadeIn, fadeOut}) => {
  const f = useCurrentFrame();
  const d = frames(shot, fps);
  if (!shot.take) throw new Error(`Shot ${shot.id} has no take — no black placeholders allowed`);
  const start = Math.round(shot.in * fps);
  const env = (t: number) => {
    const a = fadeIn > 0 ? interpolate(t, [0, fadeIn], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
    const b = fadeOut > 0 ? interpolate(t, [d - fadeOut, d], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
    return Math.min(a, b) * (shot.soundVolume ?? 1);
  };
  const snd = shot.sound ? <Audio src={staticFile(`video/${shot.sound}`)} startFrom={start} volume={env} /> : null;
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
  // Absolute start of each shot (after overlaps) for the team audio cues.
  const starts: Record<string, number> = {};
  const ends: Record<string, number> = {};
  edl.shots.reduce((t, s, i) => {
    starts[s.id] = t; ends[s.id] = t + frames(s, edl.fps);
    return ends[s.id] - tFrames(transitionAt(edl, i));
  }, 0);
  const children: React.ReactNode[] = [];
  edl.shots.forEach((shot, i) => {
    const tin = tFrames(i > 0 ? transitionAt(edl, i - 1) : undefined);
    const tout = tFrames(transitionAt(edl, i));
    children.push(
      <TransitionSeries.Sequence key={shot.id} name={shot.id} durationInFrames={frames(shot, edl.fps)}>
        <ShotView shot={shot} fps={edl.fps} fadeIn={tin} fadeOut={tout} />
      </TransitionSeries.Sequence>,
    );
    if (tout > 0) {
      children.push(<TransitionSeries.Transition key={`${shot.id}-t`} presentation={fade()} timing={linearTiming({durationInFrames: tout})} />);
    }
  });
  return (
    <AbsoluteFill style={{background: 'black'}}>
      {(edl.audio ?? []).filter((c) => (present as string[]).includes(c.file)).map((c) => {
        const at = starts[c.at] + Math.round(c.offset * edl.fps);
        const until = c.loopUntil ? ends[c.loopUntil] : c.stopAt ? starts[c.stopAt] : undefined;
        const src = staticFile(`audio/${c.file}`);
        const k = (c.keys ?? []).map(([id, o, v]) => [starts[id] + Math.round(o * edl.fps) - at, v] as const);
        const vol = k.length > 1 ? (f: number) => interpolate(f, k.map((x) => x[0]), k.map((x) => x[1]), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : c.volume;
        return (<Sequence key={c.file} from={at} durationInFrames={until ? until - at : undefined} name={`♪ ${c.file}`} layout="none">
          {c.loopUntil ? <Loop durationInFrames={until! - at}><Audio src={src} volume={vol} loop /></Loop> : <Audio src={src} volume={vol} />}
        </Sequence>);
      })}
      <TransitionSeries name="Edit">{children}</TransitionSeries>
    </AbsoluteFill>
  );
};
