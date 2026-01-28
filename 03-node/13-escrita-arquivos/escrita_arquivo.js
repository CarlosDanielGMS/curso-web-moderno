// Importa o módulo usado na escrita de arquivos
const fileSystem = require('fs');

// Instancia o objeto a ser escrito no arquivo
const pessoa =
{
    nome: 'Carlos Daniel',
    idade: 25,
    peso: 75
};

// Converte o objeto em uma string
const texto = JSON.stringify(pessoa);

// Escreve o arquivo
fileSystem.writeFile
(
    __dirname + '/arquivoGerado.json',
    texto,
    erro =>
    {
        console.log(erro || 'Arquivo salvo com sucesso!');
    }
);