const produto =
{
    nome: 'Intel Core i7-8700K',
    descricao: 'Um processador muito massa.',
    preco: 999.90,
    localizacao:
    {
        logradouro: 'Rua Interessante',
        numero: 759
    }
}

// Desestrutura ("trás pra fora") o nome e a descrição do produto
const { nome, descricao } = produto;
console.log('Nome: ' + nome);
console.log('Descrição: ' + descricao);

// Desestrutura ("trás pra fora") o nome e a descrição do produto, renomeando-os
const { nome: n, descricao: d } = produto;
console.log('Nome: ' + n);
console.log('Descrição: ' + d);

// Tenta desestruturar ("trazer pra fora") a quantidade (considerando 0 como padrão) e as dimensões do produto, 
const { quantidade = 0, dimensoes } = produto;
console.log('Quantidade: ' + quantidade);
console.log('Dimensões: ' + dimensoes);

// Tenta desestruturar ("trazer pra fora") o logradouro, o número e o bairro do produto
const { localizacao: { logradouro, numero, bairro } } = produto;
console.log('Logradouro: ' + logradouro);
console.log('Número: ' + numero);
console.log('Bairro: ' + bairro);