// Funções podem utilizar parâmetros que não foram declarados
function somar ()
{
    let resultado = 0;

    for (indice in arguments) // Percorre por cada valor passado como parâmetro
    {
        resultado += arguments[indice]; // Soma ao resultado
    };

    return resultado;
};

console.log(somar());
console.log(somar(7));
console.log(somar(7, 3, 5));
console.log(somar(7, 3, 5, ' é o resultado'));