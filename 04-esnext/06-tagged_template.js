function formatarReal (partes, ...valores)
{
    console.log(partes);
    console.log(valores);
    
    const resultado = [];

    valores.forEach
    (
        (valor, indice) =>
        {
            valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`;
            resultado.push(partes[indice], valor);
        }
    );

    return resultado.join('');
};

const preco = 998.90;
const precoParcela = 119.90;

console.log(formatarReal `1x de ${preco} ou 10x de ${precoParcela}.`);