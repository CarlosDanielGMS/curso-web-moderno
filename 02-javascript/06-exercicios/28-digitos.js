const exibir = mensagem => console.log(mensagem);
function filtrar (valores, digitos)
{
    return valores.filter(elemento => String(elemento).length == digitos);
};

exibir(filtrar([38, 2, 365, 10, 125, 11], 2));
exibir(filtrar([5, 9, 1, 125, 11], 1));