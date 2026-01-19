function getValor (imposto = 0, moeda = 'R$')
{
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
};

// Primeira forma de chamar uma função
const placa =
{
    nome: 'NVIDIA GeForce RTX 2080 Ti',
    preco: 1000,
    desconto: 0.15,
    getValor
};

console.log(placa.getValor());

// Segunda e terceira forma de chamar uma função
const carro =
{
    nome: 'Ford Ka',
    preco: 15000,
    desconto: 0.15
};

console.log(getValor.call(carro, 0, '$'));
console.log(getValor.apply(carro, [0, '$']));