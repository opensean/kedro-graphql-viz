// force bit to recgonize this as dependency
require('@bitdev/vue.dev-services.linter.vue-eslint-config')

module.exports = {
  extends: [
    require.resolve('@bitdev/vue.dev-services.linter.vue-eslint-config'),
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}
