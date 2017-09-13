import React, { Component } from 'react';
import './index.css';

import video from './assets/tempbgvideo.mp4';
import fallbackbg from './assets/staticbg.jpg';

import MaskedVideoHero from './components/MaskedVideoHero';

class App extends Component {
  render() {
    return (
      <MaskedVideoHero
        title="Blockchain geolocation"
        masked="Locuscoin"
        subtitle="Whitepaper coming soon"
        mp4={video}
        poster={fallbackbg}
      />
    );
  }
}

export default App;
