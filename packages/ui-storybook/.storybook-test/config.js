import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.tsx
const req = requireContext('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
