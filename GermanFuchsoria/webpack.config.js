const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { index: './index.js' },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundles/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
