function trocar (valor)
{
    let notas = [100, 50, 10, 5, 1];
    let quantidadeNotas = [0, 0, 0, 0, 0];
    let montanteRestante = valor;

    for (let indice = 0; indice < notas.length; indice++)
    {
        quantidadeNotas[indice] = Math.floor(montanteRestante / notas[indice]);
        montanteRestante -= quantidadeNotas[indice] * notas[indice];

        if (quantidadeNotas[indice] > 0)
        {
            console.log(`${quantidadeNotas[indice]} nota(s) de R$ ${notas[indice]}`);
        };
    };
};

console.log('R$ 7:');
trocar(7);

console.log('\nR$ 18:');
trocar(18);

console.log('\nR$ 25:');
trocar(25);

console.log('\nR$ 100:');
trocar(100);