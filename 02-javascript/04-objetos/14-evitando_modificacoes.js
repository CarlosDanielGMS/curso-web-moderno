// Object.preventExtensions impede apenas de adicionar/extender atributos do objeto
const produto = Object.preventExtensions
(
    {
        nome: 'Processador',
        preco: 998.90,
        tag: 'pc'
    }
);

console.log(`Extensível: ${Object.isExtensible(produto)}`); // Exibe se o objeto é extensível ou não

produto.nome = 'SSD'; // Altera o valor de um atributo do objeto
produto.descricao = 'Rápido feito a velocidade da luz!'; // Tenta adicionar um atributo ao objeto, mas não funciona por ele não ser extensível
delete produto.tag; // Apaga um atributo do objeto
console.log(produto);

// Object.seal impede de adicionar e de remover atributos do objeto
const pessoa =
{
    nome: 'Jamilly',
    idade: 15
};
Object.seal(pessoa); // Sela o objeto
console.log(`Selado: ${Object.isSealed(pessoa)}`); // Exibe se o objeto está selado ou não

pessoa.sobrenome = 'Galvão'; // Tenta adicionar um atributo ao objeto, mas não funciona por ele ser selado
delete pessoa.nome; // Tenta apagar um atributo do objeto, mas não funciona por ele ser selado
pessoa.idade = 20; // Altera o valor de um atributo do objeto
console.log(pessoa);

// Object.freeze impede de fazer qualquer alteração no objeto
const carro =
{
    marca: 'Honda',
    modelo: 'Civic',
};
Object.freeze(carro); // Congela o objeto
console.log(`Congelado: ${Object.isFrozen(carro)}`); // Exibe se o objeto está congelado ou não

carro.ano = 2008; // Tenta adicionar um atributo ao objeto, mas não funciona por ele ser selado
delete carro.modelo; // Tenta apagar um atributo do objeto, mas não funciona por ele ser selado
carro.marca = 'Toyota'; // Tenta alterar o atributo de um objeto, mas não funciona por ele ser selado
console.log(carro);