function calcularMedia (numeros)
{
    let somaElementos = 0;
    let contagemElementos = 0;

    for (let numero of numeros)
    {
        somaElementos += numero;
        contagemElementos++;
    }

    let mediaAritmetica = somaElementos / contagemElementos;

    console.log(`Valores: ${numeros}`);
    console.log(`Média aritmética: ${mediaAritmetica}`);
}

calcularMedia([7, 3, 9, 1, 5]);