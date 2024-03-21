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
import { fixtureFile } from './files/fixture';
import { graphqlFile } from './files/graphql';
import { codegenFile } from './files/codegen';

// import { vueDtsFile } from './files/vue-dts';

export type VueComposableCodegenTemplateOptions = {
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

export class VueComposableCodegenTemplate implements ComponentTemplate {
  constructor(
    readonly name = 'vue-composable-codegen',
    readonly description = 'A vue composable template for graphql codegen. Can be used for Vue composables.',
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
      fixtureFile(context),
      graphqlFile(context),
      codegenFile(context)
      // vueDtsFile(context),
    ];
  }

  static from(options: VueComposableCodegenTemplateOptions = {}) {
    return () =>
      new VueComposableCodegenTemplate(
        options.name,
        options.description,
        options.hidden
      );
  }
}
