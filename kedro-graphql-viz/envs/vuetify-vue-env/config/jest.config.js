const vueJestConfig = require('@bitdev/vue.dev-services.tester.vue-jest-config');
const {
  generateNodeModulesPattern,
} = require('@teambit/dependencies.modules.packages-excluder');

// Override the Jest config to ignore transpiling from specific folders
const packagesToExclude = ['@bitdev'];

const transformIgnorePatterns = [
  generateNodeModulesPattern({
    packages: packagesToExclude,
    excludeComponents: true
  }),
]

module.exports = {
  ...vueJestConfig,
  transformIgnorePatterns,
};
