import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

describe('Menu component', () => {
  it('should render without crashing', () => {
    const component = renderer.create(<Menu />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
