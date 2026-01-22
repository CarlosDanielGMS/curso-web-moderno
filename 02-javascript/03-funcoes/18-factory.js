function criarProduto (nome, preco)
{
    return {
        nome,
        preco,
        desconto: 0.1
    };
};

console.log(criarProduto('NVIDIA GeForce RTX 2080 Ti', 1499.90));
console.log(criarProduto('Intel Core i7-8700K', 799.90));