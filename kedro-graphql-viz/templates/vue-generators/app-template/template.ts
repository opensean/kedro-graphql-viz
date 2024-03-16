import {
  ComponentContext,
  ComponentFile,
  ComponentTemplate,
} from '@teambit/generator';
import { indexFile } from './files/index-file';
import { componentFile } from './files/component';
import { docsFile } from './files/docs';
import { testFile } from './files/test';
import { htmlFile } from './files/html';
import { rootFile } from './files/root';
import { appFile } from './files/app';
// import { vueDtsFile } from './files/vue-dts';

export type VueAppTemplateOptions = {
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

export class VueAppTemplate implements ComponentTemplate {
  constructor(
    readonly name = 'vue-app',
    readonly description = 'A vue application template. Can be used for Vue applications.',
    readonly hidden = false
  ) {}

  isApp = true;

  generateFiles(context: ComponentContext): ComponentFile[] {
    return [
      indexFile(context),
      docsFile(context),
      componentFile(context),
      testFile(context),
      htmlFile(context),
      rootFile(context),
      appFile(context),
      // vueDtsFile(context),
    ];
  }

  static from(options: VueAppTemplateOptions = {}) {
    return () =>
      new VueAppTemplate(
        options.name,
        options.description,
        options.hidden
      );
  }
}
