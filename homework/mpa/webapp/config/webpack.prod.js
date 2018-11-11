const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const basicConfig = require('./webpack.basic');

const prod = {
  mode: 'production',
  plugins: [
    new InlineManifestWebpackPlugin('runtime')
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {}
  },
};

module.exports = merge(basicConfig, prod);
