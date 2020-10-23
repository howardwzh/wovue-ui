import { configure } from '@storybook/vue';
import { configureViewport } from '@storybook/addon-viewport';

configureViewport({
    defaultViewport: 'responsive'
});

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);