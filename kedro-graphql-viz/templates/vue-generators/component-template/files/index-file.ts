import { ComponentContext } from '@teambit/generator';

export const indexFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: 'index.ts',
    content: `import ${Name} from "./${name}.vue";

export default ${Name};
`,
  };
};
