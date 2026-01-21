function concatenar (primeiroVetor, segundoVetor)
{
    let vetorResultante = primeiroVetor.concat(segundoVetor);

    console.log(vetorResultante);
}

let vetorInteiro = [7, 3, 9, 1];
let vetorString = ['Daniel', 'Eslhânio', 'Neta', 'Estela'];
let vetorDouble = [9.7, 3.1, 5.9, 7.3];

concatenar(vetorInteiro, vetorDouble);
concatenar(vetorString, vetorDouble);