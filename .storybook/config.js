import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/samples.js');
}

configure(loadStories, module);