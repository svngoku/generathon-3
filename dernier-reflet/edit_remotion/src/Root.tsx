import React from 'react';
import {Composition} from 'remotion';
import {Edit, totalFrames, Edl} from './Edit';
import blk2 from './edl_blk2.json';

// Master = 16:9 full frame 1920x1080, no crop, no bars (team rule 31/10 16:45). Social 9:16 later from the same EDL.
export const Root: React.FC = () => (
  <>
    <Composition
      id="Blk2"
      component={Edit}
      width={1920}
      height={1080}
      fps={(blk2 as Edl).fps}
      durationInFrames={totalFrames(blk2 as Edl)}
      defaultProps={{edl: blk2 as Edl}}
    />
  </>
);
