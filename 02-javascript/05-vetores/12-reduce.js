const alunos =
[
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Nícolas', nota: 9.8, bolsista: false },
    { nome: 'Carlos', nota: 8.7, bolsista: true }
];

function isTodosBolsistas (valorAnterior, valorAtual)
{
    if (!valorAnterior) return false
    else if (!valorAtual) return false
    else return true;
};

function isAlgumBolsista (valorAnterior, valorAtual)
{
    if (valorAnterior) return true
    else if (valorAtual) return true
    else return false;
};

const bolsistas = alunos.map(aluno => aluno.bolsista);
const todosBolsistas = bolsistas.reduce(isTodosBolsistas);
const algumBolsista = bolsistas.reduce(isAlgumBolsista);

console.log(`Todos são bolsistas: ${todosBolsistas}`);
console.log(`Algum é bolsista: ${algumBolsista}`);