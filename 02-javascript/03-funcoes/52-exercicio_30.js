function identificarMaiorMenor (numeros)
{
    let maior = numeros[0];
    let menor = numeros[0];

    for (let numero of numeros)
    {
        if (numero > maior)
        {
            maior = numero;
        }
        else if (numero < menor)
        {
            menor = numero;
        };
    };

    console.log(`Valores: ${numeros}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
};

identificarMaiorMenor([7, 3, 5, 9, 1, 12, 18, 20, 16, 14, -5]);