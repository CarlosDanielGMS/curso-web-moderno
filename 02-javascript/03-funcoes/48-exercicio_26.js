function exibirPares ()
{
    let pares = [];

    for (let indice = 1; indice <= 100; indice++)
    {
        if (indice % 2 == 0)
        {
            pares.push(indice);
        };
    };

    console.log('Pares de 1 a 100:', pares);
};

exibirPares();