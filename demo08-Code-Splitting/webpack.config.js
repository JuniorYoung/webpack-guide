const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'code splitting'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'all',
                    enforce: true
                }
            }
        }
    },
    output: { //输出
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};  