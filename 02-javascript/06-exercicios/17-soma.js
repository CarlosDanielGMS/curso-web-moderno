const exibir = mensagem => console.log(mensagem);
function somarElementos (vetor)
{
    return vetor.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
};

exibir(somarElementos([10, 10, 10]));
exibir(somarElementos([15, 15, 15, 15]));