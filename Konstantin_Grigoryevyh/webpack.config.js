const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "static_src", "index.js"),
    output: {
        path: path.resolve(__dirname, "out"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, ''),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        [
                            '@babel/plugin-proposal-class-properties',
                            {
                                loose: true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "static_src", "index.html")
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        historyApiFallback: true,
    },
};