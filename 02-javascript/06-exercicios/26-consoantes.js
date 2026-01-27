const exibir = mensagem => console.log(mensagem);
function removerVogais (texto)
{
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    for (let vogal of vogais)
    {
        texto = texto.replace(vogal, '');
    };

    return texto;
};

exibir(removerVogais("Cod3r"));
exibir(removerVogais("Fundamentos"));