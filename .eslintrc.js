module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    shelljs: true,
  },
  rules: {
    'no-console': 2,
    'no-async-promise-executor': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  plugins: ['prettier', '@typescript-eslint'],
};
