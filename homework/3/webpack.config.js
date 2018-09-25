const webpack = require('webpack');
module.exports = {
  entry: {
    app:["webpack-hot-middleware/client?noInfo=true&reload=true",
      "./controller/router.js","./index.js"],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};