module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': 0,
    'operator-linebreak': 'off'
  }
}
