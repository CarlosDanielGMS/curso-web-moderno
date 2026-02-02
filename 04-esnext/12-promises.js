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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(erro => console.log(erro.message));