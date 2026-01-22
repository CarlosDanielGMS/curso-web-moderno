function possuiMesmosCaracteres (string1, string2)
{
    let estaContido = true;

    for (let i = 0; i < string1.length; i++)
    {
        for (let j = 0; j < string2.length; j++)
        {
            if (string1.charAt(i).toLowerCase() == string2.charAt(j).toLowerCase())
            {
                estaContido = true;
                break;
            }
            else
            {
                estaContido = false;
            };
        };

        if (!estaContido)
        {
            return estaContido;
        };
    };

    for (let i = 0; i < string2.length; i++)
    {
        for (let j = 0; j < string1.length; j++)
        {
            if (string2.charAt(i).toLowerCase() == string1.charAt(j).toLowerCase())
            {
                estaContido = true;
                break;
            }
            else
            {
                estaContido = false;
            };
        };

        if (!estaContido)
        {
            return estaContido;
        };
    };

    return estaContido;
};

console.log(possuiMesmosCaracteres('abc', 'abcd'));