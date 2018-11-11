const glob = require('glob');
const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webappDist = join(__dirname, '../../build/webapp');
const viewDir = join(__dirname, '../../build/webapp/view');
const webappComponentDir = join(__dirname, '../component');
const webappComponentDist = join(__dirname, '../../build/webapp/component');
const files = glob.sync(join(__dirname, '../view/*/index.js')) || [];

const isProd = process.env.NODE_ENV === 'prod';

let plugins = [], entries = {};
files.forEach((file) => {
  if (/.*\/view\/(.*?)\/index.js/.test(file)) {
    let name = RegExp.$1;
    entries[name] = file;
    let plug = new HtmlWebpackPlugin({

      filename: `${viewDir}/${name}.swig`,
      chunks: ['runtime', name],
      template: join(__dirname, `../view/${name}/${name}.swig`),
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd
      },
      inject:false
    });
    plugins.push(plug);
  }
});

module.exports = {
  plugins,
  entries,
  viewDir,
  webappDist,
  webappComponentDir,
  webappComponentDist,
  isProd
};