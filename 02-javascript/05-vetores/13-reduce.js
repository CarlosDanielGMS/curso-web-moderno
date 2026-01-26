Array.prototype.reduce2 = function(callback)
{
    let reducao = this[0];

    for (let indice = 0; indice < this.length; indice++)
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

const alunos =
[
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Nícolas', nota: 9.8, bolsista: false },
    { nome: 'Carlos', nota: 8.7, bolsista: true }
];

const bolsistas = alunos.map(aluno => aluno.bolsista);
const todosBolsistas = bolsistas.reduce2(isTodosBolsistas);
const algumBolsista = bolsistas.reduce2(isAlgumBolsista);

console.log(`Todos são bolsistas: ${todosBolsistas}`);
console.log(`Algum é bolsista: ${algumBolsista}`);