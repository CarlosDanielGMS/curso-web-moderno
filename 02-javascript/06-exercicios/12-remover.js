const exibir = mensagem => console.log(mensagem);
function removerProriedade (objeto, propriedade)
{
    let novoObjeto = Object.assign({}, objeto);
    delete novoObjeto[propriedade];
    return novoObjeto;
};

exibir(removerProriedade({a: 1, b: 2}, "a"));