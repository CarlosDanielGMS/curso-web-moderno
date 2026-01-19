// IIFE => Expressão de Função Imediatamente Invocada
// Delimita um escopo personalizado

(
    function ()
    {
        var variavel = 'Teste...';

        console.log(variavel);
    }
) ();

// Exibe erro, pois var variavel foi declarada no escopo delimitado/personalizado
// console.log(variavel);