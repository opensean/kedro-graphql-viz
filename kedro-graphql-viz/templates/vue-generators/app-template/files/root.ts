import { ComponentContext } from '@teambit/generator';

export const rootFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `${name}.root.ts`,
    content: `import { createApp } from "vue";
import App from "./${name}.vue";

createApp(App).mount("#app");
`,
  };
};
