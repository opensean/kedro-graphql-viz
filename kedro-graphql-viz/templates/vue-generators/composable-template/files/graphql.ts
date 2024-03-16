import { ComponentContext } from '@teambit/generator';

export const graphqlFile = (context: ComponentContext) => {
  const { namePascalCase: PascalCaseName } = context;
  return {
    relativePath: `query.graphql`,
    content: `query ${PascalCaseName}($argument: String!) {
        example(argument: $argument) {
            field
        }
      }
      
`,
  };
};
