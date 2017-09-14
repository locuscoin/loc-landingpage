import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MaskedVideoHero from './MaskedVideoHero';

import video from './assets/tempbgvideo.mp4';
import fallbackbg from './assets/staticbg.jpg';

storiesOf('MaskedVideoHero', module).add('default', () =>
  <MaskedVideoHero
    title="Blockchain positioning"
    masked="Locuscoin"
    subtitle="Whitepaper coming soon"
    mp4={video}
    poster={fallbackbg}
  />
);
