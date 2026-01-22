function calcularJurosSimples (capital, taxa, tempo)
{
    console.log(`Capital inicial: R$ ${capital.toFixed(2).replace('.', ',')}`);
    console.log(`Taxa de juros anual: ${taxa * 100}%`);
    console.log(`Tempo de aplicação: ${tempo} anos`);
    
    let montante = capital + capital * taxa * tempo;

    console.log(`Montante da aplicação financeira sob o regime de juros simples: R$ ${montante.toFixed(2).replace('.', ',')}\n`);
};

function calcularJurosCompostos (capital, taxa, tempo)
{
    console.log(`Capital inicial: R$ ${capital.toFixed(2).replace('.', ',')}`);
    console.log(`Taxa de juros anual: ${taxa * 100}%`);
    console.log(`Tempo de aplicação: ${tempo} anos`);
    
    let montante = capital;
    for (let iteracao = 1; iteracao <= tempo; iteracao++)
    {
        montante += montante * taxa;
    };

    console.log(`Montante da aplicação financeira sob o regime de juros compostos: R$ ${montante.toFixed(2).replace('.', ',')}\n`);
};

calcularJurosSimples(10000, 0.15, 2);
calcularJurosCompostos(10000, 0.15, 5);