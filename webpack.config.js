var path = require('path');

module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "assets/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  }
};