// Atribuição simples de função anônima
const somar = function (x, y)
{
    return x + y;
};

// Invocação de função
const exibirResultado = function (x, y, operacao = somar)
{
    console.log('Resultado:', operacao(x, y));
};

exibirResultado(7, 3); // Considera a operação padrão (somar)
exibirResultado(7, 3, somar); // Redundante à anterior
exibirResultado(7, 3, function (x, y) {
    return x - y;
}); // Cria função normal imediatamente na invocação
exibirResultado(7, 3, (x, y) => x * y); // // Cria função arrow imediatamente na invocação

// Cria função "anônima" dentro de objeto
const pessoa =
{
    saudar ()
    {
        console.log('A paz de Deus!');
    }
};

pessoa.saudar();