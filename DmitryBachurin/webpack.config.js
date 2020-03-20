const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    /*
    Указываем точку входа: корневая папка, папка в проекте, файл
    __dirname - корневая папка
    */
    entry: path.resolve(__dirname, "src", "index.js"),
    /* Указываем точку выхода: корневая папка, папка в проекте */
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        /* Правила обработки файлов */
        rules: [

            {
                /* Указываем тип файла */
                test: /\.(js|jsx)$/,
                /* Указываем директорию, в которой ищем файлы */
                include: path.resolve(__dirname, "src"),
                /* Указываем установленный обработчик */
                loader: 'babel-loader',
                /* Указываем директорию, исключаемую из обработки */
                exclude: path.resolve(__dirname, "node_modules"),
                options: {
                    /* Указываем пресет для обработки */
                    presets: ['@babel/env', '@babel/react'],
                    /* Подключаем плагин для нового синтаксиса*/
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })
    ],
    /*Указываем расширения для обрабатываемых файлов, чтобы можно было не указывать расширение при импорте компонентов*/
    resolve: {
        extensions: [".jsx", ".js"]
    }
    
}