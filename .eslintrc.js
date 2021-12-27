// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'jest', 'prettier', 'react', 'react-hooks', 'react-native'],
  env: { 'es6': true, 'jest': true, 'jest/globals': true, 'react-native/react-native': true },
  settings: { 'import/ignore': ['node_modules/react-native/index\\.js$'] },
  parserOptions: { ecmaVersion: 10, sourceType: 'module', ecmaFeatures: { jsx: true } },
  rules: {
    // eslint
    'camelcase': ['error', { properties: 'always' }],
    'no-console': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': 'error',

    // eslint-plugin-import
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/no-useless-path-segments': 'error',
    'import/no-relative-packages': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*test.{ts,tsx,js,jsx}',
          '**/*spec.{ts,tsx,js,jsx}',
          '**/*e2e.{ts,tsx,js,jsx}',
          '**/e2e/*.{ts,tsx,js,jsx}',
          '**/__mocks__/*.{ts,tsx,js,jsx}',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    'import/no-commonjs': ['error', { allowRequire: true, allowConditionalRequire: true, allowPrimitiveModules: true }],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': ['error', 'always', { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' }],
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external', 'type', 'object'], 'internal', ['index', 'sibling', 'parent']],
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'warnOnUnassignedImports': true,
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    'import/no-anonymous-default-export': 'error',

    // typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    // jest
    'jest/no-hooks': 'off',

    // prettier
    'prettier/prettier': ['error', require('./.prettierrc')],

    // react-native
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
