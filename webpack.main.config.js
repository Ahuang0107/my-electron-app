const path = require("path");
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main/main.js'),
    target: 'electron-main',
    output: {
        path: path.join(__dirname, 'dist/main'),
        filename: '[name].js',
        library: {
            type: 'commonjs2',
        },
    },
    module: {
        rules: []
    },
    plugins: [],
    node: {
        __dirname: false,
        __filename: false,
    },
}
