module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    camelcase: 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'guard-for-in': 'off',
    'prettier/prettier': 'off', // 解决replace with

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'off', // https://github.com/vuejs/vue-eslint-parser/issues/58
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/first-attribute-linebreak': 0,
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'class-methods-use-this': 'off', // 因为AxiosCancel必须实例化而能静态化所以加的规则，如果有办法解决可以取消
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
