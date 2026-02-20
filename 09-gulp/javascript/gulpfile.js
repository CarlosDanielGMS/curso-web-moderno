const gulp = require('gulp'); // Importa o módulo responsável pela otimização do código
const babel = require('gulp-babel'); // Importa o módulo responsável por converter os códigos modernos em versões mais antigas (e, consequentemente, mais compatíveis com motores e navegadores desatualizados)
const uglify = require('gulp-uglify'); // Importa o módulo responsável por compactar/minificar o código, removendo espaços em branco, comentários, quebras de linha etc
const concat = require('gulp-concat'); // Importa o módulo responsável pela concatenação do código
const series = gulp.series; // Importa o submódulo do Gulp responsável por executar as tarefas em série

function otimizarCodigo () // Instancia a função responsável por otimizar o código
{
    const enderecoArquivos = 'src/**/*.js'; // Instancia a constante com o endereço para todos os arquivos com extensão '.js' presentes no diretório 'src' e em seus subdiretórios
    const enderecoDestino = 'build'; // Instancia a constante com o endereço do diretório onde os arquivos transformados devem ser salvos
    const nomeArquivoTransformado = 'codigo.min.js' // Instancia a constante com o nome do arquivo transformado a ser salvo
    
    return gulp.src(enderecoArquivos) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src) e os transforma sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe // Invoca a função que adiciona uma função à "esteira" de execuções
        (
            babel // Invoca a função 'babel'
            (
                { // Passa um objeto de opções como parâmetro da função
                    presets: ['env'], // Define o valor do atributo 'presets' do objeto como '['env']', considerando a versão mais atualizada do JavaScript como base
                    comments: false // Define o valor do atributo 'comments' do objeto 'false', ignorando os comentários do arquivo
                }
            )
        )
        .pipe(uglify()) // Invoca a função que adiciona a função 'uglify' à "esteira" de execuções
        .pipe(concat(nomeArquivoTransformado)) // Invoca a função que adiciona a função 'concat' à "esteira" de execuções passando o nome do arquivo transformado como parâmetro
        .pipe(gulp.dest(enderecoDestino)) // Invoca a função que adiciona a função 'gulp.dest' à "esteira" de execuções passando o endereço de destino como parâmetro
        .on('error', erro => console.log(erro)); // Invoca a função que registra um ouvinte para o evento de erro e exibe a mensagem
};

function sinalizarConclusaoTarefas (sinalizarConclusao) // Instancia a função responsável por sinalizar a conclusão da tarefa passando outra função responsável por sinalizar a conclusão das tarefas como parâmetro
{
    console.log('Tarefas concluídas.'); // Exibe uma mensagem no terminal
    
    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

exports.default = series(otimizarCodigo, sinalizarConclusaoTarefas); // Exporta a função criada como padrão e executa as funções/tarefas em série