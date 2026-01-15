function avaliar (nota)
{
    let notaArredondada = Math.round(nota);

    switch (notaArredondada)
    {
        case 0: case 1: case 2:
            console.log('Reprovado... Nota: ' + notaArredondada);
            break;
        case 3: case 4: case 5:
            console.log('Recuperação. Nota: ' + notaArredondada);
            break;
        case 6: case 7: case 8:
            console.log('Aprovado! Nota: ' + notaArredondada);
            break;
        case 9: case 10:
            console.log('Quadro de Honra!!! Nota: ' + notaArredondada);
            break;
        default:
            console.log('Nota inválida!');
    };
};

avaliar(10);
avaliar(8.9);
avaliar(6.55);
avaliar(2.3);
avaliar(-1);
avaliar(11);