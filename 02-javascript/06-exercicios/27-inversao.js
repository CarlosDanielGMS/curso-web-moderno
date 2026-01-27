const exibir = mensagem => console.log(mensagem);
function inverter (objeto)
{
    let chaves = Object.keys(objeto);
    let valores = Object.values(objeto);
    let objetoInvertido = {};

    for (let indice = 0; indice < chaves.length; indice++)
    {
        objetoInvertido[valores[indice]] = chaves[indice];
    };

    return objetoInvertido;
};

exibir(inverter({ a: 1, b: 2, c: 3 }));
exibir({ a: 1, b: 2, c: 3 });