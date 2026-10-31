import React from 'react';
import {Composition} from 'remotion';
import {Edit, totalFrames, Edl} from './Edit';
import blk2 from './edl_blk2.json';

// Master = native 2.39 (1920x804). Social 9:16 comes later from the same EDL.
export const Root: React.FC = () => (
  <>
    <Composition
      id="Blk2"
      component={Edit}
      width={1920}
      height={804}
      fps={(blk2 as Edl).fps}
      durationInFrames={totalFrames(blk2 as Edl)}
      defaultProps={{edl: blk2 as Edl}}
    />
  </>
);
