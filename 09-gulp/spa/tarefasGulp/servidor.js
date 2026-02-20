const gulp = require('gulp'); // Importa o módulo responsável pela otimização dos códigos
const webServer = require('gulp-webserver'); // Importa o módulo responsável pela inicialização do servidor
const watch = require('gulp-watch'); // Importa o módulo responsável por monitorar os arquivos

function inicializarServidor () // Instancia a função responsável por inicializar o servidor
{
    const enderecoOrigem = 'build'; // Instancia a constante com o endereço de construção
    const nomeArquivo = 'app.min.js' // Instancia a constante com o nome do arquivo minificado a ser salvo
    const enderecoDestino = 'build/assets/js'; // Instancia a constante com o endereço do diretório onde os arquivos concatenados devem ser salvos
    
    return gulp.src(enderecoOrigem) // Invoca a função que seleciona o diretório a ser utilizado no fluxo de trabalho (src), transforma ele sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe // Invoca a função que adiciona uma função à "esteira" de execuções
        (
            webServer // Invoca a função que realiza a inicialização do servidor
            (
                { // Passa um objeto de opções como parâmetro da função
                    port: 8080, // Define o valor do atributo 'port' do objeto como '8080', configurando a porta a ser utilizada pelo servidor
                    open: true, // Define o valor do atributo 'open' do objeto como 'true', configurando o servidor para abrir o navegador
                    livereload: true // Define o valor do atributo 'livereload' do objeto como 'true', configurando o servidor para recarregar o serviço sempre que houver alterações
                }
            )
        )
};

function monitorarArquivos (sinalizarConclusao) // Instancia a função responsável por monitorar os arquivos e passa outra função como parâmetro responsável por sinalizar a conclusão da tarefa
{
    const enderecoArquivosHtmlMonitorados = 'src/**/*.html'; // Instancia a constante com o endereço para todos os arquivos com extensão '.html' presentes no diretório 'src' e em seus subdiretórios
    const enderecoArquivosCssMonitorados = 'src/**/*.scss'; // Instancia a constante com o endereço para todos os arquivos com extensão '.scss' presentes no diretório 'src' e em seus subdiretórios
    const enderecoArquivosJsMonitorados = 'src/**/*.js'; // Instancia a constante com o endereço para todos os arquivos com extensão '.js' presentes no diretório 'src' e em seus subdiretórios
    const enderecoArquivosImagensMonitorados = 'src/assets/img/**/*.*'; // Instancia a constante com o endereço para todos os arquivos presentes no diretório 'src/assets/imgs' e em seus subdiretórios

    watch(enderecoArquivosHtmlMonitorados, () => gulp.series('processarArquivosHtml')()); // Invoca a função que monitora os arquivos passando como parâmetro o endereço dos arquivos HTML a serem monitorados e a função que processa eles
    watch(enderecoArquivosCssMonitorados, () => gulp.series('processarArquivosCss')()); // Invoca a função que monitora os arquivos passando como parâmetro o endereço dos arquivos CSS a serem monitorados e a função que processa eles
    watch(enderecoArquivosJsMonitorados, () => gulp.series('processarArquivosJs')()); // Invoca a função que monitora os arquivos passando como parâmetro o endereço dos arquivos JS a serem monitorados e a função que processa eles
    watch(enderecoArquivosImagensMonitorados, () => gulp.series('importarArquivosImagens')()); // Invoca a função que monitora os arquivos passando como parâmetro o endereço dos arquivos de imagens a serem monitorados e a função que importa eles

    return sinalizarConclusao(); // Retorna a função passada como parâmetro
};

module.exports =  // Exporta os módulos passados como parâmetro
{
    inicializarServidor,
    monitorarArquivos
};