---
labels: ['vue', 'env', 'vue components']
description: 'A Vue environment for building Vue components.'
---

import { EnvOverview } from '@teambit/envs.docs.env-overview-template';

<EnvOverview description='This env provides a development environment for Vue components.'
  logo= {{
    name: 'Vue & Vuetify',
    icon: 'https://static.bit.dev/extensions-icons/vue.svg',
    background: '#476582'
  }} 
  tools = {{
    developmentTools: [
      {
        name: 'TypeScript',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/tsconfig.json',
        ],
      },
    
      {name: 'Vitest',
       configFiles: 'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/vitest.config.js'}
      {
        name: 'ESLint',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/eslintrc.js',
        ],
      },
      {
        name: 'Prettier',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/prettier.config.js',
        ],
      },
    ],
    buildPipeline: [
      {
        name: 'TypeScript',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/tsconfig.json',
        ],
      },
      {
        name: 'ESLint',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/eslintrc.js',
],
      },
      {
        name: 'Vitest',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/vitest.config.js',
        ],
      },
    ],
    previewsAndDocs: [
      {
        name: 'Component Preview',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/preview/mounter.tsx',
        ],
      },
      {
        name: 'Component Docs',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/preview/docs.tsx',
        ],
      },
      {
        name: 'Webpack',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/webpack.config.ts',
        ],
      },
      {
        name: 'Webpack Dev Server',
        configFiles: [
          'https://bit.cloud/bitdev/vue/envs/vue-env/~code/config/webpack.config.ts',
        ],
      },
    ],
  }}
  envId='bitdev.vue/vue-env'
  docsLink='https://bit.dev/docs/vue-intro' isExtension />