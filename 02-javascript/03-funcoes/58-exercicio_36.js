function multiplicarVetor (vetor, multiplo)
{
    for (let indice = 0; indice < vetor.length; indice++)
    {
        vetor[indice] *= multiplo;
    };

    return vetor;
};

function multiplicarVetorSeMaiorQue5 (vetor, multiplo)
{
    for (let indice = 0; indice < vetor.length; indice++)
    {
        if (vetor[indice] > 5)
        {
            vetor[indice] *= multiplo;
        }
    };

    return vetor;
};

console.log(multiplicarVetor([1, 9, 2, 8, 3], 2));
console.log(multiplicarVetorSeMaiorQue5([1, 9, 2, 8, 3], 2));