const fileSystem = require('fs');
const path = require('path');

function lerArquivo (caminho)
{
    return new Promise
    (
        (resolver, rejeitar) =>
        {
            fileSystem.readFile
            (
                caminho,
                (erro, conteudo) =>
                {
                    erro ? rejeitar(`Não foi possível ler o arquivo.\n${erro.message}`) : resolver(conteudo.toString());
                }
            );
        }
    );
};

const caminho = path.join(__dirname, '17-dados.txt');

lerArquivo(caminho).then(console.log)
                   .catch(console.log);