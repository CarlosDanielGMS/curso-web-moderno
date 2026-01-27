const exibir = mensagem => console.log(mensagem);
function retornarExtremos (vetor)
{
    let primeiroElemento = vetor.shift();
    let ultimoElemento = vetor.pop();

    return [primeiroElemento, ultimoElemento];
};

exibir(retornarExtremos([7, 14, "olá"]));
exibir(retornarExtremos([-100, "aplicativo", 16]));