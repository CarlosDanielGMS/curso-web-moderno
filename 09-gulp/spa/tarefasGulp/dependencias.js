const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos
const uglifyCss = require('gulp-uglifycss'); // Importa o módulo responsável por compactar/minificar o código CSS, removendo espaços em branco, comentários, quebras de linha etc
const concat = require('gulp-concat'); // Importa o módulo responsável pela concatenação dos códigos

function importarDependenciasCss () // Instancia a função responsável por importar as dependências CSS
{
    const enderecoOrigem = 'node_modules/font-awesome/css/font-awesome.css'; // Instancia a constante com o endereço para o arquivo CSS
    const nomeArquivoMinificado = 'deps.min.css' // Instancia a constante com o nome do arquivo minificado a ser salvo
    const enderecoDestino = 'build/assets/css'; // Instancia a constante com o endereço do diretório onde o arquivo concatenado deve ser salvo
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona o arquivo a ser utilizado no fluxo de trabalho (src), transforma ele sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(uglifyCss({ 'uglyComments': false })) // Invoca a função que compacta/minifica o código CSS passando como parâmetro um objeto com o atributo 'uglyComments' e o valor 'false', evitando a remoção de quebras de linhas e excessos de espaços dos comentários
        .pipe(concat(nomeArquivoMinificado)) // Invoca a função que concatena os códigos passando o nome do arquivo minificado como parâmetro
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva o arquivo passando o endereço de destino como parâmetro
};

function importarDependenciasFontes () // Instancia a função responsável por importar as dependências de fontes
{
    const enderecoOrigem = 'node_modules/font-awesome/fonts/*.*'; // Instancia a constante com o endereço para os arquivos de fonte
    const enderecoDestino = 'build/assets/fonts'; // Instancia a constante com o endereço do diretório onde os arquivos devem ser salvos
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(gulp.dest(enderecoDestino)); // Invoca a função que salva os arquivos passando o endereço de destino como parâmetro
};

module.exports =  // Exporta os módulos passados como parâmetro
{
    importarDependenciasCss,
    importarDependenciasFontes
};