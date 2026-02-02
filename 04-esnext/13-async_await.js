const protocolo = require('http');

function getTurma (letraTurma)
{
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

    return new Promise
    (
        (resolver, rejeitar) =>
        {
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
                            try
                            {
                                resolver(JSON.parse(resultado));
                            }
                            catch (erro)
                            {
                                rejeitar(erro);
                            }
                        }
                    );
                }
            );
        }
    );
};

async function obterAlunos ()
{
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
};

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));