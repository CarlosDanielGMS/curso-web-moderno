const gulp = require('gulp'); // Importa o módulo responsável pela otimização do código
const typeScript = require('gulp-typescript'); // Importa o módulo responsável pela compilação do código TypeScript para JavaScript
const projetoTypeScript = typeScript.createProject('tsconfig.json'); // Instancia o projeto de compilação TypeScript passando o endereço do arquivo de configuração como parâmetro
const series = gulp.series; // Importa o submódulo do Gulp responsável por executar as tarefas em série

function compilarCodigo () // Instancia a função responsável por compilar o código TypeScript
{
    const enderecoDestino = 'build'; // Instancia a constante com o endereço do diretório onde os arquivos transformados devem ser salvos
    
    return projetoTypeScript.src() // Invoca a função que seleciona os arquivos a serem utilizados no fluxo de trabalho (src), transforma eles sequencialmente (pipe) e retorna a sinalização de conclusão da tarefa
        .pipe(projetoTypeScript()) // Invoca a função que realiza a compilação do código TypeScript
        .pipe(gulp.dest(enderecoDestino)) // Invoca a função que salva os arquivos passando o endereço de destino como parâmetro
};

exports.default = series(compilarCodigo); // Exporta a função criada como padrão e executa as funções/tarefas em série