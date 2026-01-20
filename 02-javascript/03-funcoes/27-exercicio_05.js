function formatarReal (valor)
{
    let resultado = valor.toFixed(2).replace('.', ',');

    console.log(`R$ ${resultado}`);
};

formatarReal(0.1 + 0.2);
formatarReal(999 + 0.899876);