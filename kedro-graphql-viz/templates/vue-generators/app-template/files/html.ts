import { ComponentContext } from '@teambit/generator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const htmlFile = (_: ComponentContext) => {
  return {
    relativePath: `static/index.html`,
    content: `<div id="app"></div>`,
  };
};
