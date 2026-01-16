// Exibe e incrementa de 1 a 10 usando while (muitas linhas)
let contador = 1;
while (contador <= 10)
{
    console.log(`Contador (while): ${contador}`);
    contador++;
};

// Simplifica o processo usando for
for (let incremento = 1; incremento <= 10; incremento++)
{
    console.log(`Contador (for): ${incremento}`);
};

// Exibe todas as notas presentes no vetor
const notas = [7.9, 5.3, 9.8, 3.6, 4.7];
for (let i = 0; i < notas.length; i++)
{
    console.log(`Nota: ${notas[i]}`);
};