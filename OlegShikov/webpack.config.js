const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js"),],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                // options: 
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")}),
        new MiniCssExtractPlugin(),
        new HTMLInlineCSSWebpackPlugin()
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/bot/': {
            target: 'https://aiproject.ru/api/',
            pathRewrite: { '/bot/': '' },
            secure: false,
            changeOrigin: true,
            }
        }
    },
    devtool: 'inline-source-map'
}