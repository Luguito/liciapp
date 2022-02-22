
import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

// Config Viewports
const viewports = {
  mobileSM: {
    name: 'Mobile small',
    styles: {
      width: '320px',
      height: '580px'
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '380px',
      height: '700px'
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '778px',
      height: '1024px'
    },
  },
  desktopSD: {
    name: 'Desktop SD',
    styles: {
      width: '1372px',
      height: '100%'
    },
  },
  desktopHD: {
    name: 'Desktop HD',
    styles: {
      width: '1928px',
      height: '100%'
    },
  }
};

addParameters({
  viewport: { viewports: viewports },
  info: {},
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
