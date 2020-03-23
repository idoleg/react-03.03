const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { index: './index.js' },
    output: {
        path: path.resolve(__dirname, "app"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, ''),
                loader: 'babel-loader',
                exclude: '/node_modules/',
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
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    resolve: {
        extensions: ['.jsx', '.js']
    }
};