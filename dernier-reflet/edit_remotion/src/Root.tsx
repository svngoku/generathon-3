import React from 'react';
import {Composition} from 'remotion';
import {Edit, totalFrames, Edl, Transition} from './Edit';
import blk1json from './edl_blk1.json';
const blk1 = blk1json as unknown as Edl;
import blk2 from './edl_blk2.json';

// Joins block EDLs in film order; `bridges` = the transition between the last shot of a block and the first of the next.
const join = (blocks: Edl[], bridges: Transition[]): Edl => ({
  fps: blocks[0].fps,
  shots: blocks.flatMap((b) => b.shots),
  transitions: blocks.flatMap((b, i) => [...(b.transitions ?? []), ...(bridges[i] ? [bridges[i]] : [])]),
  audio: blocks.flatMap((b) => b.audio ?? []),
});
const film = join([blk1, blk2 as Edl], [
  {cut: '06a-07>E02', type: 'fade', frames: 10, why: 'she runs down the metro stairs -> the station corridor'},
]);

// Master = 16:9 full frame 1920x1080, no crop, no bars (team rule 31/10 16:45). Social 9:16 later from the same EDL.
const comp = (id: string, edl: Edl) => (
  <Composition key={id} id={id} component={Edit} width={1920} height={1080}
    fps={edl.fps} durationInFrames={totalFrames(edl)} defaultProps={{edl}} />
);
export const Root: React.FC = () => <>{comp('Film', film)}{comp('Blk1', blk1)}{comp('Blk2', blk2 as Edl)}</>;
