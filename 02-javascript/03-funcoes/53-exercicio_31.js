function contarNegativos (numeros)
{
    let quantidadeNegativos = 0;
    let quantidadePositivos = 0;

    for (let numero of numeros)
    {
        numero < 0 ? quantidadeNegativos++ : quantidadePositivos++;
    };
    
    console.log(`Valores: ${numeros}`);
    console.log(`Quantidade de números negativos: ${quantidadeNegativos}`);
    console.log(`Quantidade de números positivos: ${quantidadePositivos}`);
};

contarNegativos([-9, 7, -5, 3, -2, 6, -8, 2, -4, 8, -12]);