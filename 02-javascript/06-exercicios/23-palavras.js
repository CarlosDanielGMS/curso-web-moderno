const exibir = mensagem => console.log(mensagem);
function contarPalavras (frase)
{
    let palavras = frase.split(' ');
    return palavras.length;
};

exibir(contarPalavras("Sou uma frase"));
exibir(contarPalavras("Me divirto aprendendo a programar"));