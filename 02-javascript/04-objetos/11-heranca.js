function FuncaoObjeto () {}; // Cria uma função-objeto
console.log(FuncaoObjeto.prototype); // Exibe o protótipo da função-objeto

const objeto1 = new FuncaoObjeto; // Cria uma instância da função-objeto
const objeto2 = new FuncaoObjeto; // Cria outra instância da função-objeto
console.log(objeto1.__proto__ === objeto2.__proto__); // Instâncias diferentes da mesma função-objeto possuem o mesmo protótipo
console.log(FuncaoObjeto.prototype === objeto1.__proto__); // O protótipo da função-objeto e da instância da função-objeto são o mesmo

FuncaoObjeto.prototype.nome = 'Anônimo'; // Cria um atributo diretamente no protótipo da função-objeto
FuncaoObjeto.prototype.saudar = function () // Cria uma função diretamente no protótipo da função-objeto
{
    console.log(`A paz de Deus! Meu nome é ${this.nome}.`);
};

objeto1.saudar(); // O objeto não possui o método, mas herda de seu protótipo (objeto-pai)
objeto1.nome = 'Daniel'; // Sobrescreve o atributo herdado
objeto1.saudar(); // Exibe o novo valor do atributo sobrescrito

const objeto3 = {}; // Cria um objeto vazio, sem herança
objeto3.__proto__ = FuncaoObjeto.prototype; // Atribui uma relação de herança manualmente ao objeto, herdando da função-objeto
objeto3.nome = 'Neta'; // Sobrescreve o valor do atributo, herdado da função-objeto
objeto3.saudar(); // Exibe a saudação, herdada da função-objeto

console.log((new FuncaoObjeto).__proto__ === FuncaoObjeto.prototype); // Toda instância criada a partir da função-objeto possui o mesmo protótipo
console.log(FuncaoObjeto.__proto__ === Function.prototype); // A função-objeto é, no fim das contas, uma função e possui um atributo de protótipo igual ao protótipo da Function
console.log(Function.prototype.__proto__ === Object.prototype); // O protótipo da Function possui um atributo de protótipo igual ao protótipo do Object
console.log(Object.prototype.__proto__ === null); // O protótipo do Object possui um atributo de protótipo nulo, uma vez que o objeto é o "topo da cadeia"