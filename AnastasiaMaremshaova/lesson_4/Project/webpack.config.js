const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ],
    resolve: {
        extensions: [
            ".jsx", '.js'
        ],
        alias: {        
            'react-router-dom': path.resolve('./node_modules/react-router-dom')
        }

    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map'

}