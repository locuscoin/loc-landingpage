import React from 'react';
import MaskedVideoHero from './MaskedVideoHero';
import renderer from 'react-test-renderer';

import video from '../../assets/svartedalen-forests.mp4';

// https://github.com/facebook/react/issues/7371
jest.mock('react-dom', () => ({
    findDOMNode: () => ({
      getContext: jest.fn(),
    }),
  })
);

describe('MaskedVideoHero component', () => {
  it('should render without crashing', () => {
    const component = renderer.create(
      <MaskedVideoHero
        title="Snabbt"
        masked="trådlöst"
        subtitle="bredband"
        mp4={video}
        poster="https://s3-us-west-1.amazonaws.com/trippian/destination/94/tripbg.jpg"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
