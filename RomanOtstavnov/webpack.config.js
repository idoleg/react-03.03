const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {
    contentBase: 'src',
    port: 7000,
  }
};