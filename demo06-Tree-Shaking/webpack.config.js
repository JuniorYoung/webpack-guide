const path = require('path');

module.exports = {
    entry: './src/index.js', //入口
    output: { //输出
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};  