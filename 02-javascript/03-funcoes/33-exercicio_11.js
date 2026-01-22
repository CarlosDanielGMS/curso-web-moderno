function verificarAnoBissexto (ano)
{
    let bissexto;

    if (ano % 400 == 0)
    {
        bissexto = true;
    }
    else if (ano % 100 == 0)
    {
        bissexto = false;
    }
    else if (ano % 4 == 0)
    {
        bissexto = true;
    }
    else
    {
        bissexto = false;
    };

    console.log(`O ano ${ano} ${bissexto ? 'é' : 'não é'} bissexto!`);
    return bissexto;
}

verificarAnoBissexto(1996);
verificarAnoBissexto(2000);
verificarAnoBissexto(2023);
verificarAnoBissexto(2028);
verificarAnoBissexto(2032);