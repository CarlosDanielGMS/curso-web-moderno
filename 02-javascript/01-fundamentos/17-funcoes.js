// Armazena uma função em uma constante (versão extendida)
const exibirSoma = function (a, b)
{
    console.log('Resultado da soma (versão extendida): ' + (a + b));
};

exibirSoma(7, 3);

// Armazena uma função em uma constante (versão reduzida)
const somar = (a, b) =>
{
    return a + b;
};

console.log('Resultado da soma (versão reduzida): ' + somar(7, 3));

// Armazena uma função em uma constante (versão implícita)
const subtrair = (a, b) => a - b;

console.log('Resultado da subtração: ' + subtrair(7, 9));

// Armazena uma função em uma constante (sem parênteses no parâmetro, opcional por ser único)
const exibir = valor => console.log('Valor: ' + valor);

exibir(7);