// Atribuição clássica de função com parâmetro
let dobro = function (valor)
{
    return 2 * valor;
};

// Atribuição reduzida de função com parâmetro
dobro = (valor) =>
{
    return 2 * valor;
};

// Retorno implícito de função com parâmetro
dobro = (a) => 2 * a;

// Atribuição clássica de função sem parâmetro
let saudar = function ()
{
    return 'A paz de Deus!';
};

// Retorno implícito de função sem parâmetro
saudar = () => 'A paz de Deus!'; // Sem parâmetro, de fato. Boa prática.
saudar = _ => 'A paz de Deus!'; // Parâmetro "inútil"