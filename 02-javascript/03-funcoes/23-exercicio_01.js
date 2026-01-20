function calcular (x, y)
{
    soma = x + y;
    subtracao = x - y;
    multiplicacao = x * y;
    divisao = x / y;

    console.log(`Resultado da soma entre ${x} e ${y}: ${soma}`);
    console.log(`Resultado da subtração entre ${x} e ${y}: ${subtracao}`);
    console.log(`Resultado da multiplicação entre ${x} e ${y}: ${multiplicacao}`);
    console.log(`Resultado da divisão entre ${x} e ${y}: ${divisao}\n`);
};

calcular(10, 5);
calcular(8, 4);