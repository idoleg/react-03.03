const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      },
      {
        test: /\.[sac]*ss$/i,
        exclude: '/node_modules/',
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundles/[name].css'
    }),
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
