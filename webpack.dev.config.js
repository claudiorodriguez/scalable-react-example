/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const {environment} = require('webpack-config');

environment.set('cssIdent', '[path]___[name]__[local]___[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  devServer: {
    contentBase: [
      'devServer/'
    ],
    host: '0.0.0.0',
    inline: true,
    publicPath: '/dist/',
    watchContentBase: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});
