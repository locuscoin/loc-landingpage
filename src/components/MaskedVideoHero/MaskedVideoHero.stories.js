import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MaskedVideoHero from './MaskedVideoHero';

import video from '../../assets/svartedalen-forests.mp4';

storiesOf('MaskedVideoHero', module).add('default', () =>
  <MaskedVideoHero
    title="Blockchain positioning"
    masked="Locuscoin"
    subtitle="Whitepaper coming soon"
    mp4="https://images.apple.com/media/us/iphone/photography-how-to/2017/ce313adc-d31b-4ea7-8330-71fe673d4985/hero/hero_background_xlarge.mp4"
    poster="https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg"
  />
);
