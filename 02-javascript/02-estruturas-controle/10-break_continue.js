const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let indice in numeros)
{
    if (indice == 7)
    {
        break; // Interrompe a execução do laço de repetição
    };

    console.log(`Índice ${indice}: número ${numeros[indice]}`);
};

for (let indice in numeros)
{
    if (indice == 3)
    {
        continue; // Pula a execução da iteração do laço de repetição
    };

    console.log(`Índice ${indice}: número ${numeros[indice]}`);
};

lacoExterno: // Considerada má prática
for (let x in numeros)
{
    for (let y in numeros)
    {
        if (x == 3 && y == 7)
        {
            break lacoExterno; // Interrompe a execução do laço de repetição externo
        }

        console.log(`Par: ${x} e ${y}`);
    };
};