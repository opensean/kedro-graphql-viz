import { ComponentContext } from '@teambit/generator';

export const appFile = (context: ComponentContext) => {
  const { name } = context;
  return {
    relativePath: `${name}.vue-app.cjs`,
    content: `/**
 * Modify this file to change webpack config or add a deployment
 * for your vue application.
 *
 * @see https://bit.dev/docs/apps/vue-app-build#modify-webpack-configuration
 * @see https://bit.dev/docs/apps/vue-app-deployment#use-a-deployer
 */

/** @type {import("@bitdev/vue.app-types.vue-app-type").VueAppOptions} */
module.exports = {
  name: "${name}-app",
  entry: require.resolve("./${name}.root"),
};
`,
  };
};
