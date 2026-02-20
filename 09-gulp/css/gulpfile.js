const gulp = require('gulp'); // Importa o módulo responsável pela otimização do código
const sass = require('gulp-sass')(require('sass')); // Importa o módulo responsável pela compilação do código CSS
const uglifyCss = require('gulp-uglifycss'); // Importa o módulo responsável por compactar/minificar o código CSS, removendo espaços em branco, comentários, quebras de linha etc
const concat = require('gulp-concat'); // Importa o módulo responsável pela concatenação do código
const parallel = gulp.parallel; // Importa o submódulo do Gulp responsável por executar as tarefas em paralelo

function compilarCodigo () // Instancia a função responsável por compilar o código TypeScript
{
    const enderecoArquivo = 'src/sass/index.scss'; // Instancia a constante com o endereço para o arquivo que importa os módulos CSS
    const enderecoDestino = 'build/css'; // Instancia a constante com o endereço do diretório onde os arquivos transformados devem ser salvos
    const nomeArquivoCompilado = 'estilo.min.css' // Instancia a constante com o nome do arquivo compilado a ser salvo
    
    return gulp.src(enderecoArquivo) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(sass().on('error', sass.logError)) // Invoca a função que realiza a compilação do código CSS, a que registra um ouvinte para o evento de erro e passa como parâmetro a função que exibe o erro
        .pipe(uglifyCss({ 'uglyComments': true })) // Invoca a função que compacta/minifica o código CSS passando como parâmetro um objeto com o atributo 'uglyComments' e o valor 'true', removendo quebras de linhas e excessos de espaços dos comentários
        .pipe(concat(nomeArquivoCompilado)) // Invoca a função que concatena os códigos passando o nome do arquivo transformado como parâmetro
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva o arquivo passando o endereço de destino como parâmetro
};

function copiarArquivo () // Instancia a função responsável por copiar o arquivo HTML
{
    const enderecoOrigem = 'src/index.html'; // Instancia a constante com o endereço para o arquivo HTML
    const enderecoDestino = 'build'; // Instancia a constante com o endereço do diretório onde o arquivo HTML deve ser salvo
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona o arquivo a ser utilizado no fluxo de trabalho e retorna a sinalização de conclusão da tarefa
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva o arquivo do fluxo de trabalho no endereço de destino especificado nos parâmetros da função
};

exports.default = parallel(compilarCodigo, copiarArquivo); // Exporta a função criada como padrão e executa as funções/tarefas em paralelo