/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/max-attributes-per-line': 2,
    'indent': ['error', 4],
    'vue/html-indent': ['error', 4],
    'vue/max-attributes-per-line': 2,
  },
  globals: {
    emit: 'readonly'
  }
}
