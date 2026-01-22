function escreverNumeroPorExtenso (numero)
{
    let numeroPorExtenso = '';

    switch (numero)
    {
        case 0:
            numeroPorExtenso = 'zero';
            break;
        case 1:
            numeroPorExtenso = 'um';
            break;
        case 2:
            numeroPorExtenso = 'dois';
            break;
        case 3:
            numeroPorExtenso = 'três';
            break;
        case 4:
            numeroPorExtenso = 'quatro';
            break;
        case 5:
            numeroPorExtenso = 'cinco';
            break;
        case 6:
            numeroPorExtenso = 'seis';
            break;
        case 7:
            numeroPorExtenso = 'sete';
            break;
        case 8:
            numeroPorExtenso = 'oito';
            break;
        case 9:
            numeroPorExtenso = 'nove';
            break;
        case 10:
            numeroPorExtenso = 'dez';
            break;
        default:
            numeroPorExtenso = 'número fora do intervalo';
            break;
    };

    console.log(`${numero}: ${numeroPorExtenso}`);
};

escreverNumeroPorExtenso(0);
escreverNumeroPorExtenso(1);
escreverNumeroPorExtenso(2);
escreverNumeroPorExtenso(3);
escreverNumeroPorExtenso(4);
escreverNumeroPorExtenso(5);
escreverNumeroPorExtenso(6);
escreverNumeroPorExtenso(7);
escreverNumeroPorExtenso(8);
escreverNumeroPorExtenso(9);
escreverNumeroPorExtenso(10);
escreverNumeroPorExtenso(11);