import { ComponentContext } from '@teambit/generator';

export const codegenFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `codegen.ts`,
    content: `import { CodegenConfig } from '@graphql-codegen/cli'
    
const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:5000/graphql/',
    documents: './kedro-graphql-viz/composables/${name}/query.graphql',
    generates: {
      './kedro-graphql-viz/composables/${name}/graphql.ts': {
        plugins: [
          'typescript',
          'typescript-operations',
          'typescript-vue-apollo',
          'add',
        ],
        config: {
          vueCompositionApiImportFrom: 'vue',
          content: '/* eslint-disable */\\nimport { DocumentNode } from "graphql" // https://github.com/dotansimha/graphql-code-generator/issues/8133 \\n/* eslint-enable */'
        },
      },
      './kedro-graphql-viz/composables/${name}/codegen.mock.ts':{
        plugins: [
          'typescript-mock-data'
        ],
        config: {
          typesFile: './graphql.ts'
        },
      }
    }
  }
    
  export default config
`,
  };
};