function concatenar (primeiroVetor, segundoVetor)
{
    return primeiroVetor = primeiroVetor.concat(segundoVetor);
}

let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

vetorPilha = concatenar(vetorPilha, vetorAdiciona);
console.log(vetorPilha);