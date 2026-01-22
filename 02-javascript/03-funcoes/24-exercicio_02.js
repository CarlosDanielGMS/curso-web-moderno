function classificarTriangulo (a, b, c)
{
    console.log(`Lado A: ${a}`);
    console.log(`Lado B: ${b}`);
    console.log(`Lado C: ${c}`);

    if (a == b && b == c)
    {
        console.log(`Classificação: equilátero\n`);
    }
    else if (a == b || b == c || a == c)
    {
        console.log(`Classificação: isósceles\n`);
    }
    else
    {
        console.log(`Classificação: escaleno\n`);
    };
};

classificarTriangulo(7, 7, 7);
classificarTriangulo(7, 3, 7);
classificarTriangulo(7, 3, 1)