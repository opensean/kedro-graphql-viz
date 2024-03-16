import {
  ComponentConfig,
  ComponentContext,
  ComponentFile,
  ComponentTemplate,
} from '@teambit/generator';

import { join } from 'path';
import { readFileSync } from 'fs';

const generateFile = (filepath: string, destpath: string, context: ComponentContext): ComponentFile => {
  const { name, namePascalCase: Name } = context;
  const source = readFileSync(join(__dirname, filepath), { encoding: 'utf8' });
  return {
    relativePath: destpath.replace(/COMP_NAME_PASCAL_CASE/g, Name).replace(/COMP_NAME/g, name),
    content: source.replace(/COMP_NAME_PASCAL_CASE/g, Name).replace(/COMP_NAME/g, name),
  }
};

export type VueEnvTemplateOptions = {
  /**
   * name of the template
   */
  name?: string;

  /**
   * description of the template.
   */
  description?: string;

  /**
   * hide the template from the `bit templates` command.
   */
  hidden?: boolean;
};

export class VueEnvTemplate implements ComponentTemplate {
  constructor(
    readonly name = 'vue-env',
    readonly description = 'A vue env template. Can be used for creating your own Vue env.',
    readonly hidden = false
  ) {}

  isEnv = true;

  generateFiles(context: ComponentContext): ComponentFile[] {
    return [
      generateFile(`files/docs.template`, `COMP_NAME.docs.md`, context),
      generateFile(`files/index.template`, `index.ts`, context),
      generateFile(`files/main.template`, `COMP_NAME.bit-env.ts`, context),

      generateFile(`files/jsonc.template`, `env.jsonc`, context),

      generateFile(`files/eslintrc.template`, `config/eslintrc.js`, context),

      generateFile(`files/prettier.template`, `config/prettier.config.js`, context),

      generateFile(`files/types.template`, `config/types/types.d.ts`, context),
      generateFile(`files/tsconfig.template`, `config/tsconfig.json`, context),

      generateFile(`files/jest.template`, `config/jest.config.js`, context),

      generateFile(`files/webpack.config.template`, `config/webpack.config.ts`, context),

      generateFile(`files/preview-docs.template`, `preview/docs.tsx`, context),
      generateFile(`files/preview-mounter.template`, `preview/mounter.tsx`, context),
    ];
  }

  config(): ComponentConfig {
    return {
      'teambit.envs/envs': {
        env: 'teambit.envs/env',
      },
    };
  }

  static from(options: VueEnvTemplateOptions = {}) {
    return () =>
      new VueEnvTemplate(
        options.name,
        options.description,
        options.hidden
      );
  }
}
