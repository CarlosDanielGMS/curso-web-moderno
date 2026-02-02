function gerarNumeroEntre (minimo, maximo, atraso)
{
    minimo > maximo ? [maximo, minimo] = [minimo, maximo] : null;

    return new Promise
    (
        (resolver, rejeitar) =>
        {
            setTimeout
            (
                () =>
                {
                    const fator = maximo - minimo + 1;
                    const numeroAleatorio = parseInt(Math.random() * fator) + minimo;

                    resolver(numeroAleatorio);
                },
                atraso * 1000
            );
        }
    );
};

function gerarNumeros ()
{
    return Promise.all
    (
        [
            gerarNumeroEntre(0, 100, 4),
            gerarNumeroEntre(0, 60, 1),
            gerarNumeroEntre(0, 80, 0.5),
            gerarNumeroEntre(0, 40, 3),
            gerarNumeroEntre(0, 90, 0.1),
            gerarNumeroEntre(0, 10, 1.5),
        ]
    );
};

console.time('Tempo para Geração dos Números');
gerarNumeros().then(numeros => console.log(`Números gerados: ${numeros}`))
              .then(() => console.timeEnd('Tempo para Geração dos Números'));