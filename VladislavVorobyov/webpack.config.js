const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "src","index.js"),
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Containers: path.resolve(__dirname, 'src/containers'),
            Reducers: path.resolve(__dirname, 'src/reducers'),
            Utils: path.resolve(__dirname, 'src/utils'),
            Actions: path.resolve(__dirname, 'src/actions'),
        },
    },
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    devtool: 'inline-source-map'
};
