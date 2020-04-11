const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: path.resolve(__dirname, "src", "index.jsx"),
   output: {
      path : path.resolve(__dirname, "build"),
      filename : "index.js",
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            include: path.resolve(__dirname, "src"),
            loader: "babel-loader",
            options: {
               presets: ["@babel/env", "@babel/react"],
               plugins:["@babel/plugin-proposal-class-properties"],
            }
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
   ],
   resolve: {
      extensions: [".jsx", ".js"],
   },
   devServer: {
      historyApiFallback: true,
   },
   devtool: "inline-source-map",
};
