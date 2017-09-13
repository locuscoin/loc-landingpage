import '../src/index.css';
import { addDecorator, configure } from '@kadira/storybook';
import React from 'react';
// import { Providers } from "../src/containers/App";
// import configureStore from "../src/store/configure";

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(story =>
//   <Providers store={store} theme={theme}>
//     {story()}
//   </Providers>
// );

configure(loadStories, module);
