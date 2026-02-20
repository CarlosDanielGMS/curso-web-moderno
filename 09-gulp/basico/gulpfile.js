const gulp = require('gulp'); // Importa o módulo responsável pela otimização do código
const series = gulp.series; // Importa o submódulo responsável por executar as tarefas em série

function copiar (funcao) // Declara a função para copiar e passa outra função como parâmetro
{
    console.log('Tarefa de copiar!'); // Exibe uma mensagem no terminal
    return funcao(); // Retorna a função passada como parâmetro
};

module.exports.default = series(copiar); // Exporta a função criada como padrão utilizando o método 'series'