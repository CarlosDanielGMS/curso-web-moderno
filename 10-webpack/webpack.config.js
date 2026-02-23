const webpack = require('webpack'); // Importa o módulo responsável por compilar módulos JavaScript

module.exports = // Exporta o módulo de configuração do webpack
{
    // mode: 'production', // Configura o webpack para o modo produção
    mode: 'development', // Configura o webpack para o modo desenvolvimento
    entry: './src/principal.js', // Configura o arquivo de entrada do webpack
    output: // Configura a saída do webpack
    {
        path: __dirname + '/public', // Configura o diretório de saída do webpack
        filename: 'principal.js' // Configura o nome do arquivo de saída do webpack
    },
    module: // Configura como o webpack deve lidar com os módulos/arquivos
    {
        rules: // Configura a lista de regras do webpack
        [
            {
                test: /\.css$/, // Indentifica o tipo de arquivo a utilizar os carregadores
                use: // Configura a lista de carregadores
                [
                    'style-loader', // Adiciona o CSS na página injetando um elemento <style> no DOM para cada arquivo CSS
                    'css-loader' // Interpreta os comandos @import e url() dentro do arquivo CSS
                ]
            }
        ]
    }
};