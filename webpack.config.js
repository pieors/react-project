const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][hash:8].js',
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
  }
}