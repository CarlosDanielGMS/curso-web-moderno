const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos

function importarDependenciasCss (sinalizarConclusao) // Instancia a função responsável por importar as dependências CSS e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function importarDependenciasFontes (sinalizarConclusao) // Instancia a função responsável por importar as dependências de fontes e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

module.exports =  // Exporta os módulos passados como parâmetro
{
    importarDependenciasCss,
    importarDependenciasFontes
};