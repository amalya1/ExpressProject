module.exports = {
  extends: 'airbnb-base',
  ignorePatterns: ['moleculer.config.js', 'node_modules/'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-underscore-dangle': 'off',
    'no-useless-catch': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement'],
  },
};
