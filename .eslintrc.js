module.exports = {
  extends: 'react-app',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    meteor: true
  },
  rules: {
    indent: ['warn', 2],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all'
      }
    ],
    'max-len': ['warn', 120],
    'no-var': 'warn',
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never']
  }
};
