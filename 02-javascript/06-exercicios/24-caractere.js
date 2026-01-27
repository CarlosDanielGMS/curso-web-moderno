const exibir = mensagem => console.log(mensagem);
function contarCaractere (caractereBuscado, frase)
{
    let caracteres = frase.split('');
    let quantidade = 0;

    for (caractere of caracteres)
    {
        if (caractere == caractereBuscado) quantidade++;
    };

    return quantidade;
};

exibir(contarCaractere("r", "A sorte favorece os audazes"));
exibir(contarCaractere("c", "Conhece-te a ti mesmo"));