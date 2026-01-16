function avaliar(nota)
{
    if (nota >= 6)
    {
        console.log('Aprovado com a nota ' + nota);
    }
    else
    {
        console.log('Reprovado com a nota ' + nota);
    };
};

avaliar(3);
avaliar(7);
avaliar('opa...');