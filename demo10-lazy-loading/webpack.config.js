const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'code splitting'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    output: { //输出
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};  