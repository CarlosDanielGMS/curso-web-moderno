const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos
const htmlMin = require('gulp-htmlmin'); // Importa o módulo responsável por compactar/minificar os códigos HTML, removendo espaços em branco, comentários, quebras de linha etc
const sass = require('gulp-sass')(require('sass')); // Importa o módulo responsável pela compilação dos códigos CSS
const uglifyCss = require('gulp-uglifycss'); // Importa o módulo responsável por compactar/minificar os códigos CSS, removendo espaços em branco, comentários, quebras de linha etc
const concat = require('gulp-concat'); // Importa o módulo responsável pela concatenação dos códigos
const babel = require('gulp-babel'); // Importa o módulo responsável por converter os códigos JS modernos em versões mais antigas (e, consequentemente, mais compatíveis com motores e navegadores desatualizados)
const uglify = require('gulp-uglify'); // Importa o módulo responsável por compactar/minificar os códigos JS, removendo espaços em branco, comentários, quebras de linha etc

function processarArquivosHtml () // Instancia a função responsável por processar os arquivos HTML e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    const enderecoOrigem = 'src/**/*.html'; // Instancia a constante com o endereço para todos os arquivos com extensão '.html' presentes no diretório 'src' e em seus subdiretórios
    const enderecoDestino = 'build'; // Instancia a constante com o endereço do diretório onde os arquivos transformados devem ser salvos
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(htmlMin({ collapseWhitespace: true })) // Invoca a função que compacta/minifica os códigos HTML passando como parâmetro um objeto com o atributo 'collapseWhitespace' e o valor 'true', removendo espaços em branco
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva os arquivos passando o endereço de destino como parâmetro
};

function processarArquivosCss () // Instancia a função responsável por processar os arquivos CSS
{
    const enderecoOrigem = 'src/assets/sass/index.scss'; // Instancia a constante com o endereço para o arquivo que importa os módulos CSS
    const nomeArquivo = 'app.min.css' // Instancia a constante com o nome do arquivo minificado a ser salvo
    const enderecoDestino = 'build/assets/css'; // Instancia a constante com o endereço do diretório onde os arquivos concatenados devem ser salvos
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(sass().on('error', sass.logError)) // Invoca a função que realiza a compilação dos códigos CSS, a que registra um ouvinte para o evento de erro e passa como parâmetro a função que exibe o erro
        .pipe(uglifyCss({ 'uglyComments': true })) // Invoca a função que compacta/minifica o código CSS passando como parâmetro um objeto com o atributo 'uglyComments' e o valor 'true', removendo os comentários
        .pipe(concat(nomeArquivo)) // Invoca a função que concatena os códigos passando o nome do arquivo minificado como parâmetro
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva os arquivos passando o endereço de destino como parâmetro
};

function processarArquivosJs () // Instancia a função responsável por processar os arquivos JS
{
    const enderecoOrigem = 'src/assets/js/**/*.js'; // Instancia a constante com o endereço para todos os arquivos com extensão '.js' presentes no diretório 'src/assets/js' e em seus subdiretórios
    const nomeArquivo = 'app.min.js' // Instancia a constante com o nome do arquivo minificado a ser salvo
    const enderecoDestino = 'build/assets/js'; // Instancia a constante com o endereço do diretório onde os arquivos concatenados devem ser salvos
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe // Invoca a função que adiciona uma função à "esteira" de execuções
        (
            babel // Invoca a função que realiza a conversão dos códigos JS modernos em versões mais antigas
            (
                { // Passa um objeto de opções como parâmetro da função
                    presets: ['env'], // Define o valor do atributo 'presets' do objeto como '['env']', considerando a versão mais atualizada do JavaScript como base
                }
            )
        )
        .pipe(uglify()) // Invoca a função que compacta/minifica os códigos JS, removendo espaços em branco, comentários, quebras de linha etc
        .pipe(concat(nomeArquivo)) // Invoca a função que concatena os códigos passando o nome do arquivo minificado como parâmetro
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva os arquivos passando o endereço de destino como parâmetro
};

function copiarArquivosImagens () // Instancia a função responsável por copiar os arquivos de imagens para a pasta de construção
{
    const enderecoOrigem = 'src/assets/imgs/**/*.*'; // Instancia a constante com o endereço para todos os arquivos presentes no diretório 'src/assets/imgs' e em seus subdiretórios
    const enderecoDestino = 'build/assets/imgs'; // Instancia a constante com o endereço do diretório onde o arquivo HTML deve ser salvo
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho e retorna a sinalização de conclusão da tarefa
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva os arquivos do fluxo de trabalho no endereço de destino especificado nos parâmetros da função
};

module.exports = // Exporta os módulos passados como parâmetro
{
    processarArquivosHtml,
    processarArquivosCss,
    processarArquivosJs,
    copiarArquivosImagens
};