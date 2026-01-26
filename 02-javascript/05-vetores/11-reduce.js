const alunos =
[
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Nícolas', nota: 9.8, bolsista: false },
    { nome: 'Carlos', nota: 8.7, bolsista: true }
];

function somar (valorAnterior, valorAtual)
{
    return valorAnterior + valorAtual;
}

const notas = alunos.map(aluno => aluno.nota);
const reducao = notas.reduce(somar);

console.log(reducao);