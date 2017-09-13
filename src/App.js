import React, { Component } from 'react';
import './index.css';

import MaskedVideoHero from './components/MaskedVideoHero';

class App extends Component {
  render() {
    return (
      <MaskedVideoHero
        title="Blockchain positioning"
        masked="Locuscoin"
        subtitle="Whitepaper coming soon"
        mp4="https://images.apple.com/media/us/iphone/photography-how-to/2017/ce313adc-d31b-4ea7-8330-71fe673d4985/hero/hero_background_xlarge.mp4"
        poster="https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg"
      />
    );
  }
}

export default App;
