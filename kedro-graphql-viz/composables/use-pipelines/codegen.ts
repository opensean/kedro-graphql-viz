import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  // ...
  schema: 'http://localhost:5000/graphql',
  documents: ['query.graphql'],
  generates: {
    'graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true
      },
    },
    'codegen.mock.ts':{
      plugins: [
        'typescript-mock-data'
      ],
      config: {
        typesFile: './graphql.ts'
      },
    }
  },
};
export default config;