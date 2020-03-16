const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, "src", "index.js"),
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: 'build.js',
   },
   module: {
      rules: [
              {
                test:  /(\.jsx|\.js)$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                  options:
                  {
                    presets: ['@babel/env', '@babel/react'],
                  }
              },
              {
     test: /\.css$/, 
     loader: "style-loader!css-loader"
   },
            ]
          },

   plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
  ],
   resolve: {
     extensions: [".jsx",".js"],
   }
};
