const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },

<<<<<<< Updated upstream
=======
    module: {
        rules: [{
            test: /\.(js)$/,
            include: path.resolve(__dirname, "src"),
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', "@babel/react"]
            }
        }, ]
    },
>>>>>>> Stashed changes
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
}