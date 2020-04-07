const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');


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
            },
            {
                test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
                loader: "file-loader?name=/src/img/[name].[ext]"
              },
              {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")}),
        new HtmlWebpackInlineSVGPlugin({runPreEmit: true})
    ],
    resolve: {
        extensions: [
            ".jsx", '.js'
        ],
        alias: {        
            'react-router-dom': path.resolve('./node_modules/react-router-dom'),
            //images: path.resolve(__dirname, 'src/img/')
            'img': path.join(__dirname, 'src', 'img')
        }

    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map'

}