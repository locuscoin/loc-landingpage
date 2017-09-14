import React from 'react';
import renderer from 'react-test-renderer';

import MaskedVideoHero from './MaskedVideoHero';
import video from '../../assets/tempbgvideo.mp4';
import fallbackbg from '../../assets/staticbg.jpg';

// https://github.com/facebook/react/issues/7371
jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    getContext: jest.fn()
  })
}));

describe('MaskedVideoHero component', () => {
  it('should render without crashing', () => {
    const component = renderer.create(
      <MaskedVideoHero
        title="Some"
        masked="Text"
        subtitle="Here"
        mp4={video}
        poster={fallbackbg}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
