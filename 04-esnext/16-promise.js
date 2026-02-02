function gerarNumeroEntre (minimo, maximo)
{
    minimo > maximo ? [maximo, minimo] = [minimo, maximo] : null;

    return new Promise
    (
        (resolver, rejeitar) =>
        {
            const fator = maximo - minimo + 1;
            const numeroAleatorio = parseInt(Math.random() * fator) + minimo;

            resolver(numeroAleatorio);
        }
    );
};

gerarNumeroEntre(0, 9).then(numeroGerado => numeroGerado * 10)
                      .then(numeroVezes10 => `O número gerado foi ${numeroVezes10}`)
                      .then(console.log);