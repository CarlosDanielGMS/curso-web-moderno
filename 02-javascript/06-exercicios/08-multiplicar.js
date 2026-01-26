const exibir = mensagem => console.log(mensagem);
function multiplicar (primeiroFator, segundoFator)
{
    let produto = 0;

    for (let indice = 1; indice <= segundoFator; indice++)
    {
        produto += primeiroFator;
    };

    return produto;
};

exibir(multiplicar(5, 5));
exibir(multiplicar(0, 7));