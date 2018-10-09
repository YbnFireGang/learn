const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
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
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          name: '[name]-[hash:5].[ext]',
          limit: 1000,
          outputPath: 'public/imgs/'
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "views/index.html",
      template: "./src/views/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css"
    }),
  ]
};