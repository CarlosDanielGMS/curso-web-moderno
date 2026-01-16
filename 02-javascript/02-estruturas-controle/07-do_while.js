function gerarNumeroAleatorio (minimo, maximo)
{
    const numero = Math.random() * (maximo - minimo) + minimo;
    const numeroArredondado = Math.round(numero);

    return numeroArredondado;
};

let numero = 1;
let tentativas = 0;

do
{
    numero = gerarNumeroAleatorio(0, 100);
    console.log('Numero gerado: ' + numero);

    tentativas++;
}
while (numero != 0)

console.log('Quantidade de tentativas: ' + tentativas);
console.log('Fim.');