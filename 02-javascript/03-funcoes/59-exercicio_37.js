function calcularProgressaoAritmetica (n, a1, r)
{
    let progressao = [a1];

    for (let indice = 1; indice < n; indice++)
    {
        progressao[indice] = progressao[indice - 1] + r;
    };

    console.log(`Termo inicial: ${a1}`);
    console.log(`Razão: ${r}`);
    console.log(`Quantidade de termos: ${n}`);
    console.log(`Progressão aritmética: ${progressao}\n`);

    return progressao;
};

function calcularProgressaoGeometrica (n, a1, r)
{
    let progressao = [a1];

    for (let indice = 1; indice < n; indice++)
    {
        progressao[indice] = progressao[indice - 1] * r;
    };

    console.log(`Termo inicial: ${a1}`);
    console.log(`Razão: ${r}`);
    console.log(`Quantidade de termos: ${n}`);
    console.log(`Progressão geométrica: ${progressao}\n`);

    return progressao;
};

calcularProgressaoAritmetica(10, 2, 3);
calcularProgressaoGeometrica(10, 2, 3);