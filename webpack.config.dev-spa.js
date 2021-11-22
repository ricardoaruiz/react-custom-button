const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index-spa.js',
    output: {
        filename: 'mains.js',
        library: 'react-custom-button',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                use: 'babel-loader', 
                exclude: /node_modules/, 
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            },
            { test: /(\.s[ac]ss|css)$/i, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            title: 'Integrations with React',
            inject: 'body'
        })
    ],
}