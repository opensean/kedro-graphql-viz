import { App } from 'vue';
import { createDocsTemplate } from '@bitdev/vue.dev-services.preview.vue-docs-template';
//import the vuetify stuff
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


/**
 * Customize a wrapper component for your component compositions (preview) in docs.
 */
import Wrapper from '@bitdev/vue.examples.my-vue-wrapper';

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
 * Customize the bit documentation template or
 * replace this with one of your own.
 * @see https://bit.dev/docs/vue-env/component-docs#docs-template
 */
export default createDocsTemplate({
  initApp,
  Wrapper
});
