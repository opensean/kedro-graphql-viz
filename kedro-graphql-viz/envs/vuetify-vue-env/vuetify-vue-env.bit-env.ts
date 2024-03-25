/**
 * This env extends vue-env.
 * @see https://bit.cloud/bitdev/vue/vue-env
 */
import { VueEnv } from '@bitdev/vue.vue-env';

import { TypescriptConfigWriter } from '@teambit/typescript.typescript-compiler';
import { ESLintLinter, EslintTask, EslintConfigWriter } from '@teambit/defender.eslint-linter';
//import { JestTask, JestTester } from '@teambit/defender.jest-tester';
import { PrettierFormatter, PrettierConfigWriter } from '@teambit/defender.prettier-formatter';
import { Pipeline } from '@teambit/builder';
import { ConfigWriterList } from '@teambit/workspace-config-files';

import { VueCompiler, VueTask } from '@bitdev/vue.dev-services.compiler.vue-compiler';
import { VuePreview } from '@bitdev/vue.dev-services.preview.vue-preview';

import webpackTransformer from "./config/webpack.config";

// custom templates
import { TemplateList } from '@teambit/generator';
import { VueComposableCodegenTemplate } from '@labmesh/kedro-graphql-viz.templates.vue-generators';
import { VueComponentTemplate, VueComposableTemplate, VueAppTemplate, VueEnvTemplate } from '@bitdev/vue.templates.vue-generators';

// use vitetest instead of jest
import { VitestTask, VitestTester } from '@teambit/vite.vitest-tester';

export class VuetifyVueEnv extends VueEnv {
  
  /* a shorthand name for the env */
  name = 'vuetify-vue-env';

  generators() {
    return TemplateList.from([
      // only implemented a custom vue composable template for graphql codegen at this point so add the default ones as well
      VueComponentTemplate.from(),
      VueComposableTemplate.from(),
      VueAppTemplate.from(),
      VueEnvTemplate.from(),
      VueComposableCodegenTemplate.from()]);
  }

  /* the compiler to use during development */
  compiler() {
    /**
     * @see https://bit.dev/reference/typescript/using-typescript
     */
    return VueCompiler.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      types: [require.resolve('./config/types/types.d.ts')],
    });
  }

  /* the test runner to use during development */
  tester() {
    /**
     * @see https://bit.dev/reference/jest/using-jest
     */
    //return JestTester.from({
    //  jest: require.resolve('jest'),
    //  config: require.resolve('./config/jest.config'),
    //});
    return VitestTester.from({

      config: require.resolve('./config/vitest.config')

    });
  }

  /* the linter to use during development */
  linter() {
    /**
     * @see https://bit.dev/reference/eslint/using-eslint
     */
    return ESLintLinter.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      configPath: require.resolve('./config/eslintrc.js'),
      pluginsPath: __dirname,
      extensions: ['.ts', '.js', '.mjs', '.vue'],
    });
  }

  /**
   * the formatter to use during development
   * (source files are not formatted as part of the components' build)
   */
  formatter() {
    /**
     * @see https://bit.dev/reference/prettier/using-prettier
     */
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
      extensions: [
        '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json', '.css', '.scss',
        '.md', '.mdx', '.html', '.yml', '.yaml', '.vue'
      ]
    });
  }

  /**
   * generates the component previews during development and during build
   */
  preview() {
    /**
     * @see https://bit.dev/docs/vue-env/component-previews
     */
    return VuePreview.from({
      transformers: [webpackTransformer],
      docsTemplate: require.resolve('./preview/docs'),
      mounter: require.resolve('./preview/mounter'),
    });
  }

  /**
   * a set of processes to be performed before a component is snapped,
   * during its build phase
   * @see https://bit.dev/docs/vue-env/build-pipelines
   */
  build() {
    return Pipeline.from([
      VueTask.from({
        tsconfig: require.resolve('./config/tsconfig.json'),
        types: [require.resolve('./config/types/types.d.ts')],
      }),
      EslintTask.from({
        tsconfig: require.resolve('./config/tsconfig.json'),
        configPath: require.resolve('./config/eslintrc.js'),
        pluginsPath: __dirname,
        extensions: ['.ts', '.js', '.mjs', '.vue'],
      }),
      //JestTask.from({
      //  jest: require.resolve('jest'),
      //  config: require.resolve('./config/jest.config'),
      //}),
      VitestTask.from({

        config: require.resolve('./config/vitest.config'),

      }),
    ]);
  }

  workspaceConfig(): ConfigWriterList {
    return ConfigWriterList.from([
      TypescriptConfigWriter.from({
        tsconfig: require.resolve('./config/tsconfig.json'),
        types: [require.resolve('./config/types/types.d.ts')],
      }),
      EslintConfigWriter.from({
        configPath: require.resolve('./config/eslintrc.js'),
        tsconfig: require.resolve('./config/tsconfig.json'),
      }),
      PrettierConfigWriter.from({
        configPath: require.resolve('./config/prettier.config.js'),
      }),
    ]);
  }
}

export default new VuetifyVueEnv();
