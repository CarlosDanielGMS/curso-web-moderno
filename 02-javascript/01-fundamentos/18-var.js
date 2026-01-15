{
    var conteudo = 'A variável está acessível!';
    console.log(conteudo);
}

console.log(conteudo);

function funcao()
{
    var valor = 987;
    console.log('Valor: ' + valor);
}

funcao();
// console.log('Valor: ' + valor); Invoca um erro, pois a variável valor pertence à função