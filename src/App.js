import React from 'react';
import styled from 'styled-components';
import './index.css';

import video from './assets/tempbgvideo.mp4';
import fallbackbg from './assets/staticbg.jpg';
import FaGithub from 'react-icons/lib/fa/github';

import MaskedVideoHero from './components/MaskedVideoHero';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Title from './components/Title';
import EmailForm from './components/EmailForm';

import withEmailForm from './containers/withEmailForm';

const EmailFormContainer = withEmailForm(EmailForm);

const SilentAnchor = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: inherit;
`;

const App = props =>
  <header>
    <Menu />
    <MaskedVideoHero
      title="Blockchain Geolocation"
      masked="Locuscoin"
      subtitle="Whitepaper coming soon"
      mp4={video}
      poster={fallbackbg}
    />
    <Hero
      gradientTopLeft="#e4b7f0"
      backgroundColor="#876edf"
      gradientBottomRight="#c86edf"
      textColor="#fff"
    >
      <Title size="huge">
        Join us building the next decentralized positioning system
      </Title>
      <EmailFormContainer />
      <SilentAnchor href="https://github.com/locuscoin">
        <FaGithub size={70} />
      </SilentAnchor>
    </Hero>
  </header>;

export default App;
