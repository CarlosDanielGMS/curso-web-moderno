Array.prototype.filter2 = function (callback)
{
    let vetor = [];

    for (let indice = 0; indice < this.length; indice++)
    {
        callback(this[indice], indice, this) ? vetor.push(this[indice]) : null;
    };

    return vetor;
}

const produtos =
[
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Mesa', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

function isCaro (objeto)
{
    return objeto.preco >= 500;
};

function isFragil (objeto)
{
    return objeto.fragil;
};

const produtosFiltrados = produtos.filter2(isCaro).filter2(isFragil);

console.log(produtosFiltrados);