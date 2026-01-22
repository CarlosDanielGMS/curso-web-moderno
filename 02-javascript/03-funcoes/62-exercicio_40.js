function exibirConceito (notas)
{
    console.log(`Notas: ${notas}`);
    
    for (let nota of notas)
    {
        if (nota >= 0 && nota < 5)
        {
            console.log(`Nota ${nota}: conceito D`);
        }
        else if (nota >= 5 && nota < 7)
        {
            console.log(`Nota ${nota}: conceito C`);
        }
        else if (nota >= 7 && nota < 9)
        {
            console.log(`Nota ${nota}: conceito B`);
        }
        else if (nota >= 9 && nota <= 10)
        {
            console.log(`Nota ${nota}: conceito A`);
        }
        else
        {
            console.log(`Nota ${nota}: inválida.`);
        };
    };
};

exibirConceito([9.5, 7.8, 12.9, 4.3, 5.6]);