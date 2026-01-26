const exibir = mensagem => console.log(mensagem);
function retornarMais (quantidade)
{
    let resultado = '';

    for (let indice = 0; indice < quantidade; indice++)
    {
        resultado += '+';
    };

    return resultado;
};

exibir(retornarMais(2));
exibir(retornarMais(4));