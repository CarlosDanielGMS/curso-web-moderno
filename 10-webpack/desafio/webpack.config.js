const modoDesenvolvimento  = process.env.NODE_ENV !== 'production';
const copyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports =
{
    mode: modoDesenvolvimento ? 'development' : 'production',
    entry: './src/inicio.js',
    output:
    {
        path: __dirname + '/dist',
        filename: 'inicio.js'
    },
    devServer:
    {
        contentBase: './dist',
        port: 9000
    },
    optimization:
    {
        minimizer:
        [
            new uglifyjsWebpackPlugin
            (
                {
                    cache: true,
                    parallel: true
                }
            ),
            new optimizeCssAssetsWebpackPlugin({})
        ]
    },
    plugins:
    [
        new miniCssExtractPlugin
        (
            {
                filename: 'estilo.css'
            }
        ),
        new htmlWebpackPlugin
        (
            {
                template: './src/index.html'
            }
        ),
        new copyWebpackPlugin
        (
            [
                {
                    from: './src/paginas',
                    to: 'paginas'
                }
            ]
        )
    ],
    module:
    {
        rules:
        [
            {
                test: /\.s?[ac]ss$/,
                use:
                [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};