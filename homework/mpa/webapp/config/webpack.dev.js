const merge = require('webpack-merge');
const Webpack = require('webpack');

const basicConfig = require('./webpack.basic');

const dev = {
  mode: 'development',
  // plugins: [
  //   new Webpack.HotModuleReplacementPlugin(),
  // ],

  // devServer: {
  //   contentBase: webappDist,
  //   hot: true,
  //   open: true,
  //   port: 8080
  // },
};

module.exports = merge(basicConfig, dev);
