import { ComponentContext } from '@teambit/generator';

export const compositionFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.composition.ts`,
    content: `import Basic${Name} from "./${name}-basic.fixture.vue";

export { Basic${Name} };
`,
  };
};

