import { App } from 'vue';
import { createDocsTemplate } from '@bitdev/vue.dev-services.preview.vue-docs-template';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

/**
 * Customize a wrapper component for your component compositions (preview) in docs.
 */
import Wrapper from '@labmesh/kedro-graphql-viz.envs.my-vue-wrapper';

/**
 * Initialize your component compositions (preview) in docs via Vue Application APIs
 * before it's mounted. For example, using a router, providing values, etc.
 * @see https://vuejs.org/api/application.html
 */
const initApp = (app: App<Element>) => {
  const vuetify = createVuetify({

    components,

    directives,

  });
  app.use(vuetify);
};

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * Use the default template or create your own.
 * @see https://bit.dev/docs/vue-env/component-previews#composition-mounter
 */
export default createMounter({
  initApp,
  Wrapper
});

