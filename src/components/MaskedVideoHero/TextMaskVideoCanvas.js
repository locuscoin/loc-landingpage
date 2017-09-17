import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(15px) saturate(250%) brightness(200%);
  opacity: 0.8;
`;

class TextMaskVideoCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.startCanvasRendering = this.startCanvasRendering.bind(this);
  }
  componentDidMount() {
    if (this.refs.canvas) {
      this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
      if (this.canvas) {
        this.canvasCtx = this.canvas.getContext('2d');
        this.startCanvasRendering();
      }
    }
  }
  startCanvasRendering() {
    if (!this.props.videoRef || !this.refs.canvas || !this.canvasCtx) {
      return;
    }
    this.video = this.props.videoRef;
    if (this.canvas && this.video && window && window.requestAnimationFrame) {
      const canvasRender = ts => {
        this.canvasCtx.drawImage(
          this.video,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
        window.requestAnimationFrame(canvasRender);
      };
      window.requestAnimationFrame(canvasRender);
    }
  }
  render() {
    return <StyledCanvas ref="canvas" height={248} width={1920} />;
  }
}

export default TextMaskVideoCanvas;
