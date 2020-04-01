const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "src"),
   output: {
       path: path.resolve(__dirname, "build"),
       filename: 'app.js',
   },
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               include: path.resolve(__dirname, "src"),
               loader: 'babel-loader',
               options: {
                   presets: ['@babel/env', '@babel/react'],
                   plugins: ['@babel/plugin-proposal-class-properties']
               }
           },
           {
               test:  /\.css$/i,
               use: ['style-loader', 'css-loader']
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")})
   ],
   resolve: {
    extensions: [".jsx",".js"]
   }
};