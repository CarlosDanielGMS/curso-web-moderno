Number.prototype.entre = function (inicio, fim)
{
    return this >= inicio && this <= fim;
};

const avaliar = function (nota)
{
    if (nota.entre(9, 10))
    {
        console.log('Quadro de honra!!!');
    }
    else if (nota.entre(7, 8.99))
    {
        console.log('Aprovado!');
    }
    else if (nota.entre(4, 6.99))
    {
        console.log('Recuperação.');
    }
    else if (nota.entre(0, 3.99))
    {
        console.log('Reprovado...');
    }
    else
    {
        console.log('Nota inválida.');
    }
};

avaliar(10);
avaliar(8.9);
avaliar(6.55);
avaliar(2.3);
avaliar(-1);
avaliar(11);