const carrinho =
[
    '{ "nome": "Placa-mãe", "preco": 998.90 }',
    '{ "nome": "Processador", "preco": 1599.90 }',
    '{ "nome": "Memória RAM", "preco": 599.90 }',
    '{ "nome": "Placa de Vídeo", "preco": 2499.90 }'
];

let valores = carrinho.map
(
    function (elemento)
    {
        let compra = JSON.parse(elemento);
        return compra.preco;
    }
);

console.log(valores);