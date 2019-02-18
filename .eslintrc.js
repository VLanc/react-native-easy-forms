module.exports = {
  extends:[
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'flowtype/require-valid-file-annotation': [
      2,
      'always'
    ],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
  env: {
    jest: true,
  },
};
