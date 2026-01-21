function calcularParesImpares (numeros)
{
    let quantidadePares = 0;
    let quantidadeImpares = 0;

    for (numero in numeros)
    {
        numero % 2 == 0 ? quantidadePares++ : quantidadeImpares++;
    };

    console.log('Quantidade de pares:', quantidadePares);
    console.log('Quantidade de ímpares:', quantidadeImpares);
};

calcularParesImpares([7, 3, 6, 2, 8]);