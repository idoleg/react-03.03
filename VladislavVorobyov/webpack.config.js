const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = {
    entry: ["@babel/polyfill", path.resolve(__dirname, "src","index.js"),],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
        new MiniCssExtractPlugin(),
        new HTMLInlineCSSWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Containers: path.resolve(__dirname, 'src/containers'),
            Reducers: path.resolve(__dirname, 'src/reducers'),
            Utils: path.resolve(__dirname, 'src/utils'),
            Actions: path.resolve(__dirname, 'src/actions'),
            Operations: path.resolve(__dirname, 'src/operations'),
            Middlewares: path.resolve(__dirname, 'src/middlewares'),
        },
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map'
};
