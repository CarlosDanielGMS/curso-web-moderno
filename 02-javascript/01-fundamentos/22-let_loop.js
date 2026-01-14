for (let i = 0; i <= 10; i++)
{
    console.log('Valor da variável "i" dentro do laço: ' + i);
};

// Exibe um erro, pois a variável "i" trata-se de um let (que respeita os escopos, logo, não é visível fora do laço)
// console.log('Valor da variável "i" fora do laço: ' + i);