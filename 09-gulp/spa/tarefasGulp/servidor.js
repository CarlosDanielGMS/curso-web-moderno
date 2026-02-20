const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos

function inicializarServidor (sinalizarConclusao) // Instancia a função responsável por inicializar o servidor e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function monitorarArquivos (sinalizarConclusao) // Instancia a função responsável por monitorar os arquivos e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

module.exports =  // Exporta os módulos passados como parâmetro
{
    inicializarServidor,
    monitorarArquivos
};