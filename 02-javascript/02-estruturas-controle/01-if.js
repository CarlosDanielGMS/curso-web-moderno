function avaliar(nota)
{
    if(nota >= 6)
    {
        console.log('Aprovado com nota ' + nota);
    }
    else
    {
        console.log('Reprovado com nota ' + nota);
    }
    
    // Alternativa com operador ternário
    // nota >= 6 ? console.log('Aprovado com nota ' + nota) : console.log('Reprovado com nota ' + nota);
};

avaliar(5.9);
avaliar(7.5);

function detectarVerdade(valor)
{
    if(valor)
    {
        console.log('É verdade: ' + valor);
    }
    else
    {
        console.log('É mentira: ' + valor);
    }

    // Alternativa com operador ternário
    // nota >= 6 ? console.log('Aprovado com nota ' + nota) : console.log('Reprovado com nota ' + nota);
};

detectarVerdade();
detectarVerdade(null);
detectarVerdade(undefined);
detectarVerdade(NaN);
detectarVerdade('');
detectarVerdade(0);
detectarVerdade(-1);
detectarVerdade(' ');
detectarVerdade('?');
detectarVerdade([]);
detectarVerdade([7, 3]);
detectarVerdade({});