function trocarElementos (primeiroVetor, segundoVetor)
{
    if (primeiroVetor.length != segundoVetor.length)
    {
        console.log(`Os vetores ${primeiroVetor} e ${segundoVetor} não possuem o mesmo tamanho.\n`);
        return;
    };

    let tamanhoVetores = primeiroVetor.length;

    for (let indice = 0; indice < tamanhoVetores; indice++)
    {
        [primeiroVetor[indice], segundoVetor[indice]] = [segundoVetor[indice], primeiroVetor[indice]];
    };
};

let vetorA = [9, 8, 7];
let vetorB = [1, 2, 3, 4];

trocarElementos(vetorA, vetorB); // Testa a igualdade de tamanhos entre os vetores

vetorA = [9, 8, 7, 6];
vetorB = [1, 2, 3, 4];

console.log(`Primeiro vetor antes da troca: ${vetorA}`);
console.log(`Segundo vetor antes da troca: ${vetorB}\n`);

trocarElementos(vetorA, vetorB); // Implementa o cenário ideal

console.log(`Primeiro vetor depois da troca: ${vetorA}`);
console.log(`Segundo vetor depois da troca: ${vetorB}\n`);