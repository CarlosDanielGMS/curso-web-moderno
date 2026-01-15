const resultado = nota => nota >= 6 ? 'Aprovado!' : 'Reprovado!';

for (let i = 0; i <= 10; i++)
{
    console.log('Nota ' + i + ': ' + resultado(i));
};