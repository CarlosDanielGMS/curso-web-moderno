const exibir = mensagem => console.log(mensagem);
function inverter (valor)
{
    let tipo = typeof valor;

    if (tipo == "boolean") return !valor
    else if (tipo == "number") return valor *= -1
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`;
};

exibir(inverter(true));
exibir(inverter("6"));
exibir(inverter(-2000));
exibir(inverter("programação"));