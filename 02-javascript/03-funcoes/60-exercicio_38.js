function exibirImpares (inicio = 0, fim = 100)
{
    if (fim < inicio)
    {
        [inicio, fim] = [fim, inicio];
    };
    
    let impares = [];

    for (let indice = inicio; indice <= fim; indice++)
    {
        if (indice % 2 != 0)
        {
            impares.push(indice);
        };
    };

    console.log(`Valores ímpares no intervalo entre ${inicio} e ${fim}: ${impares}.`);
};

exibirImpares(); // Considera o valor padrão de 0 para início e de 100 para fim
exibirImpares(20, 5); // Testa a ordenação automática dos termos
exibirImpares(25, 50); // Implementa o cenário ideal