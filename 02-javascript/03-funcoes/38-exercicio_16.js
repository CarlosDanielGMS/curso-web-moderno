function calcular (primeiroValor, operacao, segundoValor)
{
    switch (operacao)
    {
        case '+':
            console.log(`Resultado da soma entre ${primeiroValor} e ${segundoValor}: ${primeiroValor + segundoValor}.`);
            break;
        case '-':
            console.log(`Resultado da subtração entre ${primeiroValor} e ${segundoValor}: ${primeiroValor - segundoValor}.`);
            break;
        case '*':
            console.log(`Resultado da multiplicação entre ${primeiroValor} e ${segundoValor}: ${primeiroValor * segundoValor}.`);
            break;
        case '/':
            console.log(`Resultado da divisão entre ${primeiroValor} e ${segundoValor}: ${primeiroValor / segundoValor}.`);
            break;
        default:
            console.log('Operação inválida.');
            break;
    };
};

calcular(7, '+', 3);
calcular(9, '-', 4);
calcular(3, '*', 5);
calcular(8, '/', 2);