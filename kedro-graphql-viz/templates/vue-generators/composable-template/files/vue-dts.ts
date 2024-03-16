import { ComponentContext } from '@teambit/generator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const vueDtsFile = (_: ComponentContext) => {
  return {
    relativePath: `vue.d.ts`,
    content: `/* eslint-disable */

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
`,
  };
};
