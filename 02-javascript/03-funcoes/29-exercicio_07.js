function calcularBhaskara (a, b, c)
{
    const delta = Math.pow(b, 2) - 4 * a * c;
    const x1 = (- b + Math.sqrt(delta)) / (2 * a);
    const x2 = (- b - Math.sqrt(delta)) / (2 * a);

    if (delta < 0)
    {
        return 'Delta é negativo';
    }
    else
    {
        return {
            x1,
            x2
        }
    }
};

console.log(calcularBhaskara(3, -5, 12));
console.log(calcularBhaskara(2, 3, 1));