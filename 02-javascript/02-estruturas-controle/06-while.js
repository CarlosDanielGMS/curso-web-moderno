function gerarNumeroAleatorio (minimo, maximo)
{
    const numero = Math.random() * (maximo - minimo) + minimo;
    const numeroArredondado = Math.floor(numero);

    return numeroArredondado;
};

let numero = 1;
let tentativas = 0;

while (numero != 0)
{
    numero = gerarNumeroAleatorio(0, 100);
    console.log('Numero gerado: ' + numero);

    tentativas++;
}

console.log('Quantidade de tentativas: ' + tentativas);
console.log('Fim.');