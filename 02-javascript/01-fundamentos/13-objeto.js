// Primeira forma de criar um objeto
const produto = {}
produto.nome = 'NVIDIA GeForce RTX 2080 Ti'
produto.preco = 2498.90
produto['Percentual de Desconto'] = 0.10 // Utilizar espaços em nomenclaturas de atributos e variáveis é uma má prática

console.log(produto);

// Segunda forma de criar um objeto
const pessoa =
{
    nome: 'Daniel',
    idade: 25
}

console.log(pessoa);