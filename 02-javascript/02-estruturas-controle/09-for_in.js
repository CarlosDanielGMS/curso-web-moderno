const notas = [7.9, 5.3, 9.8, 3.6, 4.7];

// Exibe todos os elementos do vetor notas
for (let indice in notas)
{
    console.log(`Índice ${indice}: nota ${notas[indice]}`);
};

const produto =
{
    nome: 'Intel Core i7-8700K',
    quantidade: 9,
    preco: 1200
};

// Exibe todos os atributos do objeto 'produto'
for (let atributo in produto)
{
    console.log(`${atributo}: ${produto[atributo]}`);
};