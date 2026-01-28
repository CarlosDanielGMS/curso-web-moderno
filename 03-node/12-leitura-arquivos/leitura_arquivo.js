// Importa o módulo usado na leitura de arquivos
const fileSystem = require('fs');

// Define o caminho do arquivo a ser lido
const caminho = __dirname + '/arquivo.json';

// Define a codificação do arquivo
const codificacao = 'utf-8';

// Realiza a leitura síncrona do arquivo
const conteudo = fileSystem.readFileSync(caminho, codificacao);

// Exibe o conteúdo do arquivo
console.log(`Leitura síncrona: ${conteudo}`);

// Realiza a leitura assíncrona do arquivo
fileSystem.readFile
(
    caminho,
    codificacao,
    (erro, conteudo) =>
    {
        const configuracao = conteudo;
        console.log(`Leitura assíncrona: ${configuracao}`);
    }
);

// Realiza a leitura do arquivo diretamente (executada antes da leitura assíncrona)
const leitura = require('./arquivo.json');

// Exibe o conteúdo do arquivo
console.log(`Leitura direta (require): ${leitura}`);

// Realiza a leitura do diretório diretamente (executada antes da leitura assíncrona)
fileSystem.readdir
(
    __dirname,
    (erro, arquivos) =>
    {
        console.log(`Leitura direta (readdir): ${arquivos}`);
    }
);