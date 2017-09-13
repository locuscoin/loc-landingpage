import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      ready: false
    };
    this.isReady = this.isReady.bind(this);
    this.assignRef = this.assignRef.bind(this);
  }

  static propTypes = {
    poster: PropTypes.string,
    mp4: PropTypes.string,
    webm: PropTypes.string,
    ogg: PropTypes.string
  };

  componentDidMount() {
    // this._video.playbackRate = 1.0
  }

  assignRef(ref) {
    this.props.videoRef(ref);
    this.setState({ video: ref });
  }

  isReady() {
    if (this.state && this.state.video && this.state.video.readyState === 4) {
      this.setState({ ready: true });
    }
  }

  render() {
    const { source, poster, mp4, webm, ogg } = this.props;
    return (
      <video
        ref={this.props.videoRef.bind(this)}
        onLoadedData={this.isReady}
        muted
        autoPlay
        loop
        poster={poster}
      >
        {mp4 && <source src={mp4} type="video/mp4" />}
        {webm && <source src={webm} type="video/webm" />}
        {ogg && <source src={ogg} type="video/ogg" />}
      </video>
    );
  }
}

const StyledBackgroundVideo = styled(BackgroundVideo)`
  background-size: cover;
  background-position: center top;
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  height: auto;
  width: auto;
  min-height: 100%;
  min-width: 100%;
`;

export default StyledBackgroundVideo;
