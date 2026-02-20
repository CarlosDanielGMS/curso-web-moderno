const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos
const { series, parallel } = require('gulp'); // Importa os submódulos responsáveis por executar as tarefas em série e em paralelo
const { processarArquivosHtml, processarArquivosCss, processarArquivosJs, copiarArquivosImagens } = require('./tarefasGulp/aplicacao'); // Importa os módulos responsáveis por processar e/ou copiar os arquivos
const { importarDependenciasCss, importarDependenciasFontes } = require('./tarefasGulp/dependencias'); // Importa os módulos responsáveis por importar as dependências
const { inicializarServidor, monitorarArquivos } = require('./tarefasGulp/servidor'); // Importa os módulos responsáveis por inicializar o servidor e monitorar os arquivos

module.exports.default = series // Exporta a função criada como padrão e executa as tarefas passadas como parâmetro em série
(
    parallel // Executa as tarefas passadas como parâmetro em paralelo
    (
        series(processarArquivosHtml, processarArquivosCss, processarArquivosJs, copiarArquivosImagens), // Executa as tarefas passadas como parâmetro em série
        series(importarDependenciasCss, importarDependenciasFontes) // Paralelamente, executa as tarefas passadas como parâmetro em série
    ),
    inicializarServidor, // Posteriormente, executa a função responsável por inicializar o servidor
    monitorarArquivos // Posteriormente, executa a função responsável por monitorar os arquivos
);