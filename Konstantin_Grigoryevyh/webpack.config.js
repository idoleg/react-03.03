const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "components", "index.js"),
    output: {
        path: path.resolve(__dirname, "app"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'components'),
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};