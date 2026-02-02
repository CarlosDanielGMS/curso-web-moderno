const protocolo = require('http');

function getTurma (letraTurma, funcao)
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

    protocolo.get
    (
        url,
        resposta =>
        {
            let resultado = '';

            resposta.on
            (
                'data',
                dados =>
                {
                    resultado += dados;
                }
            );

            resposta.on
            (
                'end',
                () =>
                {
                    funcao(JSON.parse(resultado));
                }
            );
        }
    );
};

let nomes = [];
getTurma
(
    'A',
    alunos =>
    {
        nomes = nomes.concat(alunos.map(aluno => `Turma A: ${aluno.nome}`));
        getTurma
        (
            'B',
            alunos =>
            {
                nomes = nomes.concat(alunos.map(aluno => `Turma B: ${aluno.nome}`));
                getTurma
                (
                    'C',
                    alunos =>
                    {
                        nomes = nomes.concat(alunos.map(aluno => `Turma C: ${aluno.nome}`));
                        console.log(nomes);
                    }
                )
            }
        )
    }
);