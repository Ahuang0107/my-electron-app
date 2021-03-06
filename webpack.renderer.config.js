const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/renderer/index.jsx'),
    target: ['web', 'electron-renderer'],
    output: {
        path: path.join(__dirname, 'dist/renderer'),
        filename: 'renderer.js',
        library: {
            type: 'umd',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Webpack App"
        }),
    ],
}
