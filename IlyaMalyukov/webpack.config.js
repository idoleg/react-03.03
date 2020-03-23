const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
<<<<<<< HEAD
        rules: [{
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
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })
=======
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")})
>>>>>>> master
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    }
}