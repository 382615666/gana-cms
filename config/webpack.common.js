const path = require('path')
const fs = require('fs')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 目录读取多文件
const entry = {},htmlPlugins = []
const src = path.resolve(__dirname, '../src')
const files = fs.readdirSync(`${src}/entry`)
files.forEach(fileName => {
    const fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'))
    entry[fileNameWithoutExtension] = `${src}/${fileNameWithoutExtension}.js`
    htmlPlugins.push(
        new HtmlWebpackPlugin({
            inject: true,
            filename: `${fileName}`,
            template: `${src}/entry/${fileName}`,
            chunks: [fileNameWithoutExtension]
        })
    )
})

module.exports = {
    entry,
    output: {
        filename: '[name].js?[hash:32]',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        ...htmlPlugins
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'latest']
                    }
                }, {
                    loader: 'eslint-loader',
                    options: {
                        emitError: true,
                    }
                }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'less-loader'
                }]
            }
        ]
    }
}