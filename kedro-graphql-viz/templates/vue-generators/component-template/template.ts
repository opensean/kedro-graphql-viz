import {
  ComponentContext,
  ComponentFile,
  ComponentTemplate,
} from '@teambit/generator';
import { indexFile } from './files/index-file';
import { componentFile } from './files/component';
import { sampleFile } from './files/sample';
import { docsFile } from './files/docs';
import { testFile } from './files/test';
import { compositionFile } from './files/composition';
// import { vueDtsFile } from './files/vue-dts';

export type VueComponentTemplateOptions = {
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

export class VueComponentTemplate implements ComponentTemplate {
  constructor(
    readonly name = 'vue',
    readonly description = 'A vue component template. Can be used for Vue components.',
    readonly hidden = false
  ) {}

  generateFiles(context: ComponentContext): ComponentFile[] {
    return [
      indexFile(context),
      docsFile(context),
      compositionFile(context),
      componentFile(context),
      sampleFile(context),
      testFile(context),
      // vueDtsFile(context),
    ];
  }

  static from(options: VueComponentTemplateOptions = {}) {
    return () =>
      new VueComponentTemplate(
        options.name,
        options.description,
        options.hidden
      );
  }
}
