import React from 'react';
import {AbsoluteFill, OffthreadVideo, Sequence, staticFile} from 'remotion';

export type Shot = {id: string; take: string | null; in: number; dur: number; focusY: number; grade: 'normal' | 'dark'; note?: string};
export type Edl = {fps: number; shots: Shot[]};

// Cold DV grade (same intent as the ffmpeg builds): crushed blacks, desaturated.
const GRADES: Record<Shot['grade'], string> = {
  normal: 'brightness(0.9) contrast(1.06) saturate(0.85)',
  dark: 'brightness(0.68) contrast(1.12) saturate(0.8)',
};

export const totalFrames = (edl: Edl) => edl.shots.reduce((n, s) => n + Math.round(s.dur * edl.fps), 0);

const ShotView: React.FC<{shot: Shot; fps: number}> = ({shot, fps}) => {
  if (!shot.take) return <AbsoluteFill style={{background: 'black'}} />;
  return (
    <AbsoluteFill style={{background: 'black'}}>
      <OffthreadVideo
        src={staticFile(`video/${shot.take}`)}
        startFrom={Math.round(shot.in * fps)}
        muted
        style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: `50% ${shot.focusY * 100}%`, filter: GRADES[shot.grade]}}
      />
    </AbsoluteFill>
  );
};

export const Edit: React.FC<{edl: Edl}> = ({edl}) => {
  let from = 0;
  return (
    <AbsoluteFill style={{background: 'black'}}>
      {edl.shots.map((shot) => {
        const d = Math.round(shot.dur * edl.fps);
        const seq = (
          <Sequence key={shot.id} from={from} durationInFrames={d} name={shot.id}>
            <ShotView shot={shot} fps={edl.fps} />
          </Sequence>
        );
        from += d;
        return seq;
      })}
    </AbsoluteFill>
  );
};
