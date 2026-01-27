const exibir = mensagem => console.log(mensagem);
function calcularMedia (vetor)
{
    let quantidade = vetor.length;
    let soma = vetor.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
    return soma / quantidade;
};

exibir(calcularMedia([0, 10]));
exibir(calcularMedia([1, 2, 3, 4, 5]));