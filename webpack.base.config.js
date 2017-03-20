/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const {resolve} = require('path');
const autoprefixer = require('autoprefixer');
const {environment} = require('webpack-config');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        loader: 'url?limit=25000',
        test: /\.(jpg|png)$/
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              localIdentName: environment.get('cssIdent'),
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [
                  autoprefixer({
                    browsers: [
                      '> 1%',
                      'last 3 versions',
                      'iOS > 6',
                      'ie > 9',
                      'not ie < 10'
                    ]
                  })
                ];
              }
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  }
};
