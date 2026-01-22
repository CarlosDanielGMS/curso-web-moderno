const notas = [7.8, 4.3, 5.9, 8.3, 3.7, 7.2, 9.5];

// Sem callback
const notasBaixas = [];
for (let indice in notas)
{
    if (notas[indice] < 6)
    {
        notasBaixas.push(notas[indice]);
    };
};
console.log(notasBaixas);

// Com callback
const notasBaixasCallback = notas.filter(nota => nota < 6);
console.log(notasBaixasCallback);