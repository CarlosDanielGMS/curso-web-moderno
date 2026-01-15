// Função sem retorno
function exibirSoma(a, b)
{
    console.log('Resultado da soma: ' + (a + b));
};

exibirSoma(7, 3); // Exibe a soma corretamente
exibirSoma(7); // Exibe NaN
exibirSoma(7, 3, 5, 9, 2, 4, 1); // Exibe a soma com base apenas nos dois primeiros parâmetros
exibirSoma(); // Exibe NaN

// Função com retorno
function somar(a, b = 0) // Define 0 como o valor padrão de b
{
    return a + b;
};

console.log('Resultado da soma: ' + somar(5, 10)); // Exibe a soma corretamente
console.log('Resultado da soma: ' + somar(5)); // Exibe o primeiro (e único) parâmetro, uma vez que o segundo tem como valor padrão 0
console.log('Resultado da soma: ' + somar(5, 10, 8, 3, 1)); // Exibe a soma com base apenas nos dois primeiros parâmetros
console.log('Resultado da soma: ' + somar()); // Exibe NaN