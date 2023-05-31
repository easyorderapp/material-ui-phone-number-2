const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  externals: {
    'country-flag-icons/react/3x2': 'country-flag-icons/react/3x2',
    '@mui/material': '@mui/material',
    'react': 'react',
    'lodash.debounce': 'lodash.debounce',
    'lodash.memoize': 'lodash.memoize',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    '@emotion/react': '@emotion/react',
    '@emotion/styled': '@emotion/styled',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEV__: false,
    }),
  ],
});
