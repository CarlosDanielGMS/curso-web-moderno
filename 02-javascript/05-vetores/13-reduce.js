Array.prototype.reduce2 = function(callback, valorInicial)
{
    let reducao = valorInicial ? valorInicial : this[0];

    for (let indice = valorInicial ? 0 : 1; indice < this.length; indice++)
    {
        reducao = callback(reducao, this[indice], this);
    };

    return reducao;
};

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

function somar (valorAnterior, valorAtual)
{
    return valorAnterior + valorAtual;
}

const alunos =
[
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Nícolas', nota: 9.8, bolsista: false },
    { nome: 'Carlos', nota: 8.7, bolsista: true }
];

const notas = alunos.map(aluno => aluno.nota);
const soma = notas.reduce2(somar, 5);

console.log(`Soma das notas: ${soma}`);

const bolsistas = alunos.map(aluno => aluno.bolsista);
const todosBolsistas = bolsistas.reduce2(isTodosBolsistas);
const algumBolsista = bolsistas.reduce2(isAlgumBolsista);

console.log(`Todos são bolsistas: ${todosBolsistas}`);
console.log(`Algum é bolsista: ${algumBolsista}`);