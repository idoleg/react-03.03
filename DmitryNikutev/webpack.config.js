const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.jsx")],
   output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            include: path.resolve(__dirname, "src"),
            loader: "babel-loader"
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
      proxy: {
         "/api/bot/": {
            target: "https://aiproject.ru/api/",
            pathRewrite: {"/api/bot/": ""},
            secure: false,
            changeOrigin: true,
         }
      }
   },
   devtool: "inline-source-map",
};
