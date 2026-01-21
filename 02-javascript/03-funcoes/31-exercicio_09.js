function avaliarNota (nota)
{
    let multiplo = nota;
    let notaFinal = 0;

    while (multiplo % 5 != 0)
    {
        multiplo++;
    };

    multiplo - nota < 3 ? notaFinal = multiplo : notaFinal = nota;
    return notaFinal < 40 ? `Nota final: ${notaFinal}, reprovado!` : `Nota final: ${notaFinal}, aprovado!`
};

console.log('Nota 28 -', avaliarNota(28));
console.log('Nota 35 -', avaliarNota(35));
console.log('Nota 37 -', avaliarNota(37));
console.log('Nota 38 -', avaliarNota(38));
console.log('Nota 84 -', avaliarNota(84));