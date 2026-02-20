const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos

function processarArquivosHtml (sinalizarConclusao) // Instancia a função responsável por processar os arquivos HTML e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function processarArquivosCss (sinalizarConclusao) // Instancia a função responsável por processar os arquivos CSS e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function processarArquivosJs (sinalizarConclusao) // Instancia a função responsável por processar os arquivos JS e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function processarArquivosImagens (sinalizarConclusao) // Instancia a função responsável por processar os arquivos de imagens e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

module.exports = // Exporta os módulos passados como parâmetro
{
    processarArquivosHtml,
    processarArquivosCss,
    processarArquivosJs,
    processarArquivosImagens
};