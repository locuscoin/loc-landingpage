import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Hero from './Hero';

storiesOf('Hero', module).add('with gradient', () =>
  <Hero
    gradientTopLeft="#be3984"
    backgroundColor="#e261aa"
    gradientBottomRight="#ff4cb1"
    textColor="#fff"
  >
    This is a hero
  </Hero>
);
