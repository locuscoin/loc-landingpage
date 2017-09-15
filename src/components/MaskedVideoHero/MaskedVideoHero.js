import React from 'react';
import styled from 'styled-components';

import BackgroundVideo from '../BackgroundVideo';
import TextMaskVideoCanvas from './TextMaskVideoCanvas';

const MaskedVideoHeroSection = styled.section`
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 90vh;
  min-height: 620px;
  max-height: 980px;
`;

const HeroVideoContainer = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  background-repeat: no-repeat;
  background-image: url(${({ background }) => background || ''});
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center top;
  transition: opacity 0.5s ease-in-out;
`;

const HeroHeadlineWrapper = styled.div`
  position: absolute;
  z-index: 4;
  width: 100vw;
  top: 20vh;
  text-align: center;
  animation: fadein 2.0s;
  transition: opacity 2.0s cubic-bezier(0.94, 0.06, 0.05, 0.95);
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 400px) {
    top: 30vh;
  }
`;

const TextMask = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  -webkit-clip-path: url(#text-mask-svg-path);
  clip-path: url(#text-mask-svg-path);
  ${'' /* min-height: 160px; */} opacity: 1;
`;

const TextMaskScreen = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
`;

const TextMaskSvg = styled.svg`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 80px;
`;

const TextMaskSvgContent = styled.text`
  text-anchor: middle;
  font-size: 65px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -.005em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;

  @media only screen and (min-width: 400px) {
    font-size: 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroHeadline = styled.h1`
  font-size: 50px;
  line-height: 1;
  font-weight: 100;
  letter-spacing: .1em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #fff;
  margin: 0px auto 50px auto;
`;

const HeroSubHeadline = styled.h2`
  font-size: 40px;
  line-height: 1;
  font-weight: 100;
  letter-spacing: .1em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #fff;
  margin: 70px auto 0px auto;
`;

class MaskedVideoHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoReady: null
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState(this.state);
  }
  render() {
    const assignVideoRef = el => (this.parentVideoRef = el);
    const videoReady = () => {
      this.setState({ videoReady: true });
    };

    return (
      <MaskedVideoHeroSection>
        <HeroVideoContainer background={this.props.poster}>
          <BackgroundVideo
            videoRef={assignVideoRef}
            mp4={this.props.mp4}
            poster={this.props.poster}
            ready={videoReady}
          />
        </HeroVideoContainer>
        {this.state.videoReady &&
          <HeroHeadlineWrapper>
            <HeroContent>
              <HeroHeadline>
                {this.props.title}
              </HeroHeadline>
              <TextMask aria-label={this.props.maskedTitle}>
                <TextMaskScreen />
                <TextMaskVideoCanvas videoRef={this.parentVideoRef} />
                <TextMaskSvg>
                  <clipPath id="text-mask-svg-path">
                    <TextMaskSvgContent x="50%" y="100%">
                      {this.props.masked}
                    </TextMaskSvgContent>
                  </clipPath>
                </TextMaskSvg>
              </TextMask>
              <HeroSubHeadline>
                {this.props.subtitle}
              </HeroSubHeadline>
            </HeroContent>
          </HeroHeadlineWrapper>}
      </MaskedVideoHeroSection>
    );
  }
}

export default MaskedVideoHero;
