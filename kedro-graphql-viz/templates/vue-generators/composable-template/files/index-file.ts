import { ComponentContext } from '@teambit/generator';

export const indexFile = (context: ComponentContext) => {
  const { name } = context;

  return {
    relativePath: 'index.ts',
    content: `export * from "./${name}";
`,
  };
};
