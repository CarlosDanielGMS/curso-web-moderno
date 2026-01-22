function calcularFatorial(numero)
{
    let resultado = numero;

    if (numero == 0)
    {
        resultado = 1;
    }
    else
    {
        for (let indice = numero - 1; indice >= 1; indice--)
        {
            resultado *= indice;
        };
    };

    console.log(`Fatorial de ${numero}: ${resultado}`);

    return resultado;
};

calcularFatorial(10);
calcularFatorial(5);
calcularFatorial(3);
calcularFatorial(1);
calcularFatorial(0);