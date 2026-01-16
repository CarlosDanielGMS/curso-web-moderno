// JavaScript trata funções como dados.
// Por isso, podemos atribuí-las a diferentes tipos de variáveis

// Cria de forma literal
function funcao () {};

// Armazena em uma variável
const variavel = function () {};

// Armazena em um vetor
const vetor = [function (a, b) {return a + b}, funcao, variavel] // Cria, inclusive, uma função já na declaração (como foi feito no índice 0)

// Armazena em um atributo de objeto
const objeto = {};
objeto.saudar = function () {return 'A paz de Deus!'};
console.log(objeto.saudar()); // Invoca a função

// Passa como parâmetro
function executar (funcao)
{
    funcao(); // Invoca a função passada como parâmetro
};
executar(function () {console.log('Executando...')}); // Cria uma função e passa ela como parâmetro

// Retorna uma função
function somar (x, y)
{
    return function (z) // Retorna uma função possibilitando a passagem do terceiro parâmetro
    {
        console.log(`Resultado da soma: ` + (x + y + z)); // Exibe o resultado da soma
    };
};
somar(7, 3)(5); // Uma das formas de invocar a função completa
// Outra forma de invocar a função completa
const dezMais = somar(7, 3);
dezMais(5);