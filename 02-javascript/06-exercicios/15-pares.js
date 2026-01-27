const exibir = mensagem => console.log(mensagem);
function receberPares (vetor)
{
    let vetorResultante = [];

    for (let indice = 0; indice < vetor.length; indice++)
    {
        if (indice % 2 == 0 && vetor[indice] % 2 == 0) vetorResultante.push(vetor[indice]);
    };

    return vetorResultante;
};

exibir(receberPares([1, 2, 3, 4]));
exibir(receberPares([10, 70, 22, 43]));