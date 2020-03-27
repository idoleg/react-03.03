const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, "src", "index.js"),
  ],
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
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              { "loose": true }
            ]
          ]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              }
            },
          },
          'sass-loader',
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
    proxy: {
      '/aiproject/api/': {
        target: 'https://aiproject.ru/api/',
        pathRewrite: { '/aiproject/api/': '' },
        secure: false,
        changeOrigin: true,
      }
    }
  }
};