import React from 'react';
import './index.css';

import video from './assets/tempbgvideo.mp4';
import fallbackbg from './assets/staticbg.jpg';

import MaskedVideoHero from './components/MaskedVideoHero';
import Menu from './components/Menu';

const App = props =>
  <header>
    <Menu />
    <MaskedVideoHero
      title="Blockchain geolocation"
      masked="Locuscoin"
      subtitle="Whitepaper coming soon"
      mp4={video}
      poster={fallbackbg}
    />
  </header>;

export default App;
