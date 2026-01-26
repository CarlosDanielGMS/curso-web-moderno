Array.prototype.flatMap2 = function (callback)
{
    return Array.prototype.concat.apply([], this.map(callback));
};

const escola =
[
    {
        nome: 'Boolados',
        alunos:
        [
            {
                nome: 'Daniel',
                nota: 8.0
            },
            {
                nome: 'Ralyson',
                nota: 9.0
            }
        ]
    },
    {
        nome: 'Computaria',
        alunos:
        [
            {
                nome: 'Alyson',
                nota: 7.0
            },
            {
                nome: 'Joalison',
                nota: 6.0
            }
        ]
    }
];

const getNotaAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotaAluno);

const notas = escola.map(getNotasTurma);
console.log(notas);

const notasFlat = escola.flatMap2(getNotasTurma);
console.log(notasFlat);