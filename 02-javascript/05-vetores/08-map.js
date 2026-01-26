Array.prototype.map2 = function (callback)
{
    let vetor = [];

    for (let indice = 0; indice < this.length; indice++)
    {
        vetor.push(callback(this[indice], indice, this));
    }

    return vetor;
}

function extrairValor (valor, indice, vetor)
{
    let compra = JSON.parse(valor);
    return compra.preco;
}

const carrinho =
[
    '{ "nome": "Placa-mãe", "preco": 998.90 }',
    '{ "nome": "Processador", "preco": 1599.90 }',
    '{ "nome": "Memória RAM", "preco": 599.90 }',
    '{ "nome": "Placa de Vídeo", "preco": 2499.90 }'
];

let valores = carrinho.map2(extrairValor);

console.log(valores);