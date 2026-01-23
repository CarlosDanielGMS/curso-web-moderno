// Usando a notação literal
const objeto1 = {};
console.log(objeto1);

console.log(typeof Object, typeof new Object); // Exibe os tipos de objetos, onde 'Object' é uma função e 'new Object' é um objeto

// Usando a função construtora
const objeto2 = new Object;
console.log(objeto2);

// Criando a própria função construtora
function Produto (nome, preco, desconto)
{
    this.nome = nome; // Torna o nome visível (público) fora do objeto
    this.calcularPrecoComDesconto = () =>
    {
        return (preco * (1 - desconto)).toFixed(2);
    };
};

const processador = new Produto('Processador', 998.99, 0.10);
const memoria = new Produto('Memória', 599.90, 0.15);
console.log(processador.calcularPrecoComDesconto(), memoria.calcularPrecoComDesconto());

// Usando a função factory
function criarFuncionario (nome, salario, faltas)
{
    return {
        nome,
        salario,
        faltas,
        calcularSalario()
        {
            return ((salario / 30) * (30 - faltas)).toFixed(2);
        }
    };
};

const jl = criarFuncionario('João Lucas', 9000, 2);
const nn = criarFuncionario('Nícolas Nascimento', 6000, 10);
console.log(jl.calcularSalario(), nn.calcularSalario());

// Usando Object.create
const filho = Object.create(null);
filho.nome = 'Ícaro';
filho.idade = 10;
console.log(filho);

// Usando JSON.parse
const informacao = JSON.parse('{"mensagem": "Sou um JSON..."}');
console.log(informacao.mensagem);