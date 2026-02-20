const gulp = require('gulp'); // Importa o módulo responsável pela otimização do código
const { series, parallel } = require('gulp'); // Importa os submódulos responsáveis por executar as tarefas em série e em paralelo

function executarPrimeiraTarefa (sinalizarConclusao) // Instancia a função responsável por executar a primeira tarefa e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    console.log('Executando a primeira tarefa...'); // Exibe uma mensagem no terminal
    
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function executarSegundaTarefa (sinalizarConclusao) // Instancia a função responsável por executar a segunda tarefa e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    console.log('Executando a segunda tarefa...'); // Exibe uma mensagem no terminal
    
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function copiarArquivos (sinalizarConclusao) // Instancia a função responsável por copiar os arquivos e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    // const enderecosArquivos = ['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']; // Instancia a lista contendo os endereços dos arquivos a serem copiados
    const enderecoArquivos = 'pastaA/**/*.txt'; // Instancia a constante com o endereço para todos os arquivos com extensão '.txt' presentes no diretório 'pastaA' e em seus subdiretórios
    const enderecoDestino = 'pastaB'; // Instancia a constante com o endereço do diretório onde os arquivos transformados devem ser salvos

    // gulp.src(enderecosArquivos).pipe(gulp.dest('pastaB')); // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src) e os transforma (pipe)
    gulp.src(enderecoArquivos) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src) e os transforma sequencialmente (pipe)
        // .pipe(segundaTransformacao()) // Invoca a função que realiza a segunda transformação
        // .pipe(primeiraTransformacao()) // Invoca a função que realiza a primeira transformação
        // .pipe(terceiraTransformacao()) // Invoca a função que realiza a terceira transformação
        .pipe(gulp.dest(enderecoDestino)) // Invoca a função que salva os arquivos do fluxo de trabalho no endereço de destino especificado nos parâmetros da função

    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

function executarUltimaTarefa (sinalizarConclusao) // Instancia a função responsável por executar a última tarefa e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    console.log('Executando a última tarefa...'); // Exibe uma mensagem no terminal
    
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

module.exports.default = series // Exporta a função criada como padrão e executa as funções/tarefas em série
(
    parallel(executarPrimeiraTarefa, executarSegundaTarefa), // Executa as duas primeiras tarefas em paralelo
    copiarArquivos, // Depois, executa a tarefa responsável por copiar arquivos
    executarUltimaTarefa // Depois, executa a última tarefa
);