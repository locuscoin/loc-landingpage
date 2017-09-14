import React from 'react';
import './index.css';

import video from './assets/tempbgvideo.mp4';
import fallbackbg from './assets/staticbg.jpg';

import MaskedVideoHero from './components/MaskedVideoHero';

const App = props =>
  <MaskedVideoHero
    title="Blockchain geolocation"
    masked="Locuscoin"
    subtitle="Whitepaper coming soon"
    mp4={video}
    poster={fallbackbg}
  />;

export default App;
