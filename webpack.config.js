const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    example: path.resolve('example', 'demo.jsx'),
    "example-basic": path.resolve('example', 'basic.jsx'),
    "example-persist": path.resolve('example', 'persist.js')
  },
  output: {
    path: path.join(__dirname, 'example'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
            exclude: /node_modules/,
            loader: 'css-loader'
        }
    ]
  }
};
