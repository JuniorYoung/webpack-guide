const path = require('path');

module.exports = {
    entry: './src/index.js', //入口
    output: { //输出
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/, //样式
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/, //图片
                use: [ 'file-loader' ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, //字体
                use: [ 'file-loader' ]
            },
            {
                test: /\.(csv|tsv)$/, //处理 csv / tsv文件
                use: [ 'csv-loader' ]
            },
            {
                test: /\.xml$/, //处理 xml文件
                use: [ 'xml-loader' ]
            },
        ]
    }
};  