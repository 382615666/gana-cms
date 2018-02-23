const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        openPage: 'login.html',
        overlay: true,
        open: true,
        hot: true,
        port: 3333
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
})