const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    // axios: './src/public/js/lib/axios.js',
    // xtag: './src/public/js/lib/xtag.js',
    praise: './src/public/js/praise.js',
  },
  output: {
    filename: 'public/js/[name].[hash:5].js',
    path: __dirname + '/build/'
  },
  mode: 'production',
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
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      filename: "views/index.html",
      template: "./src/views/index.html",
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        collapseWhitespace: true,
      }
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css"
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};