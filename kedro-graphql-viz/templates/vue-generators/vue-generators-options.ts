import { ComponentTemplate } from '@teambit/generator';

export type VueGeneratorsOptions = {
  /**
   * list of templates to be configured by the vue env.
   */
  templates: ComponentTemplate[];

  /**
   * name of the templates package.
   */
  name?: string;
};
