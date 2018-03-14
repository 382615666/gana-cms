const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        overlay: true,
        open: true,
        openPage: 'index.html',
        hot: true,
        port: 3333,
        proxy: {
            "/": {
                target: "http://127.0.0.1:8001"
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
})