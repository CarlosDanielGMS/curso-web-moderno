const exibir = mensagem => console.log(mensagem);
function retornarSegundoMaior (vetor)
{
    vetor.sort((a, b) => b - a);
    return vetor.length > 1 ? vetor[1] : vetor[0];
};

exibir(retornarSegundoMaior([12, 16, 1, 5]));
exibir(retornarSegundoMaior([8, 4, 5, 6]));