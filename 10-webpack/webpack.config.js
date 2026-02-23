const modoDesenvolvimento  = process.env.NODE_ENV !== 'production'; // Verifica se o ambiente está configurado para o modo desenvolvimento
const webpack = require('webpack'); // Importa o módulo responsável por compilar módulos JavaScript
const miniCssExtractPlugin = require('mini-css-extract-plugin'); // Importa o módulo responsável por externalizar os módulos CSS
const uglifyWebpackPlugin = require('uglifyjs-webpack-plugin'); // Importa o módulo responsável por compactar/minificar os códigos JS, removendo espaços em branco, comentários, quebras de linha etc
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // Importa o módulo responsável por otimizar os códigos CSS

module.exports = // Exporta o módulo de configuração do webpack
{
    // mode: 'production', // Configura o webpack para o modo produção
    mode: modoDesenvolvimento ? 'development' : 'production', // Configura o webpack para o modo definido
    entry: './src/principal.js', // Configura o arquivo de entrada do webpack
    output: // Configura a saída do webpack
    {
        path: __dirname + '/public', // Configura o diretório de saída do webpack
        filename: 'principal.js' // Configura o nome do arquivo de saída do webpack
    },
    optimization: // Configura as otimizações do webpack
    {
        minimizer: // Configura o minimizador do webpack
        [
            new uglifyWebpackPlugin // Instancia o módulo responsável por compactar/minificar os códigos CSS
            (
                {
                    cache: true, // Habilita o cache
                    parallel: true // Habilita o paralelismo
                }
            ),
            new optimizeCssAssetsWebpackPlugin({}) // Instancia o módulo responsável por otimizar os códigos CSS
        ]
    },
    plugins: // Configura a lista de extensões do webpack
    [
        new miniCssExtractPlugin // Instancia o módulo responsável por externalizar os módulos CSS
        (
            {
                filename: 'estilo.css' // Configura o nome do arquivo CSS a ser externalizado pelo módulo
            }
        )
    ],
    module: // Configura como o webpack deve lidar com os módulos/arquivos
    {
        rules: // Configura a lista de regras do webpack
        [
            {
                test: /\.s?[ac]ss$/, // Indentifica o tipo de arquivo a utilizar os carregadores
                use: // Configura a lista de carregadores
                [
                    miniCssExtractPlugin.loader, // Externaliza os arquivos CSS
                    // 'style-loader', // Adiciona o CSS na página injetando um elemento <style> no DOM para cada arquivo CSS
                    'css-loader', // Interpreta os comandos @import e url() dentro do arquivo CSS
                    'sass-loader'// Compila arquivos Sass/SCSS para CSS básico
                ]
            }
        ]
    }
};