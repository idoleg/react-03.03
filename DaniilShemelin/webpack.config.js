const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(css)$/,
        include: path.resolve(__dirname, "src/css"),
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader' },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
  ]
}
