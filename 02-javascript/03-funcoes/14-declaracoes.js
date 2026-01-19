// Consegue invocar antes da declaração por se tratar de uma função declarada normalmente
console.log('Resultado da soma:', somar(7, 3));

// Exibe erro por se tratar de uma função declarada como expressão
// console.log('Resultado da subtração:', subtrair(7, 3));

// Declara função padrão
function somar (x, y)
{
    return x + y;
};

// Declara expressão de função
const subtrair = function (x, y)
{
    return x - y;
};

// Declara expressão de função nomeada
const multiplicar = function (x, y)
{
    return x * y;
};