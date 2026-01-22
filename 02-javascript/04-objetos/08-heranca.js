// Prototype/protótipo = objeto-pai (ancestral)
// Objeto possui __proto__
// Função possui .prototype

const carro =
{
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2008
};

const veiculo =
{
    marca: 'Pagani',
    modelo: 'Zonda',
    ano: 2020
};

console.log(carro.__proto__); // Exibe protótipo do objeto
console.log(carro.__proto__ === Object.prototype); // Confirma que o protótipo do objeto trata-se do 'Object.prototype'
console.log(veiculo.__proto__ === Object.prototype); // Confirma que o protótipo do objeto trata-se do 'Object.prototype'
console.log(Object.prototype.__proto__ === null); // Confirma que 'Object.prototype' não possui um protótipo (é o "topo da cadeira")

function funcao () {};
console.log(typeof Object, typeof funcao); // Exibe os tipos de 'Object' e de 'funcao'
console.log(Object.prototype, funcao.prototype); // Exibe os protótipos de 'Object' e de 'funcao'