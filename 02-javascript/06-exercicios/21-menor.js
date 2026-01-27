const exibir = mensagem => console.log(mensagem);
function verificarMenorNumero (vetor)
{
    return vetor.reduce((valorAnterior, valorAtual) => valorAnterior < valorAtual ? valorAnterior : valorAtual);
};

exibir(verificarMenorNumero([10, 5, 35, 65]));
exibir(verificarMenorNumero([5, -15, 50, 3]));