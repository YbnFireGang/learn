const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    xtag: 'x-tag',
    axios: 'axios',
    praise: './src/public/js/praise.js',
  },
  output: {
    filename: 'public/js/[name].[hash:5].js',
    path: __dirname + '/build/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "src/views/index.html",
      template: "./src/views/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "public/css/[name].[hash:5].css"
    }),
    new webpack.ProvidePlugin({
      $: 'axios',
      xtag: 'x-tag'
    }),
  ],
};