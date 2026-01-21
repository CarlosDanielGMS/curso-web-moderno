function calcular (numeros)
{
    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let numero of numeros)
    {
        numero >= 10 && numero <= 20 ? dentroIntervalo++ : foraIntervalo++;
    }

    console.log(`Dentro do intervalo: ${dentroIntervalo} números.`);
    console.log(`Fora do intervalo: ${foraIntervalo} números.`);
};

calcular([9, 3, 15, 7, 19, 5, 10, 20, 31]);