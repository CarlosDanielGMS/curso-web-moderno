const exibir = mensagem => console.log(mensagem);
function repetir (valor, repeticoes)
{
    let vetor = [];

    for (let indice = 0; indice < repeticoes; indice++)
    {
        vetor.push(valor);
    };

    return vetor;
};

exibir(repetir("código", 2));
exibir(repetir(7, 3));