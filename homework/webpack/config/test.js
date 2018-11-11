function MyPlugin(options) {
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', (compilation) => {
    console.log('The compiler is starting a new compilation...');

    compilation.plugin(
      'html-webpack-plugin-before-html-processing',
      (data, cb) => {
        data.html=data.html.replace('<!--insertjs-->',
          '<scirpt>我跑起来了</scirpt>');
      }
    )
  })
}

module.exports = MyPlugin