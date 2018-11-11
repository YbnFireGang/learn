const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlHelpPlugin = require('./htmlHelpPlugin');

const {
  plugins,
  entries,
  webappComponentDir,
  webappComponentDist,
  webappDist,
  viewDir,
  isProd
} = require('./index');


module.exports = {
  entry: entries,
  output: {
    path: viewDir,
    filename: '../asset/js/[name].[hash:5].js',
  },

  profile: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '80-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 80
              }
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              quality: 85
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([webappDist], {
      allowExternal: true
    }),
    new WebpackNotifierPlugin({title: 'Webpack done'}),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: isProd ? '../asset/[name].[hash:5].css' : '../asset/style/[name].css',
      chunkFilename: isProd ? '../asset/[name].[hash:5].css' : '../asset/style/[name].css',
    }),
    ...plugins,
    new CopyWebpackPlugin([
      {
        from: webappComponentDir,
        to: webappComponentDist,
        ignore: ['*.js', '*.css']
      }
    ]),
    new HtmlHelpPlugin(),
  ]
};