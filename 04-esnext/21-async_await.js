function gerarNumeroEntre (minimo, maximo, numerosProibidos)
{
    if (minimo > maximo) [maximo, minimo] = [minimo, maximo];

    return new Promise
    (
        (resolver, rejeitar) =>
        {
            const fator = maximo - minimo + 1;
            const numeroGerado = parseInt(Math.random() * fator) + minimo;
            
            numerosProibidos.includes(numeroGerado) ? rejeitar(`Número repetido! (${numeroGerado})`) : resolver(numeroGerado);
        }
    );
};

async function gerarAposta (quantidadeNumerosDesejada)
{
    try
    {
        const aposta = [];

        for (let quantidadeNumerosGerados = 0; quantidadeNumerosGerados < quantidadeNumerosDesejada; quantidadeNumerosGerados++)
        {
            aposta.push(await gerarNumeroEntre(1, 60, aposta));
        }

        return aposta;
    }
    catch (erro)
    {
        throw erro;
    }
};

gerarAposta(10).then(console.log)
               .catch(console.log);