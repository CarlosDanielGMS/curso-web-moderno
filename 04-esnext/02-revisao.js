function exibir (...mensagens)
{
    let texto = '';

    for (let mensagem of mensagens)
    {
        texto = texto.concat(mensagem, ' ');
    };

    console.log(texto);
};

// Funções Arrow simplificam a declaração de funções
const subtrair = (a, b) => a - b;
exibir(subtrair(7, 3));

// Em Funções Arrow, o 'this' sempre se refere ao 'exports'/'module.exports'
const primeiroLexico = () => this === module.exports;
const segundoLexico = primeiroLexico.bind({});
exibir(primeiroLexico());
exibir(segundoLexico());

// Parâmetros Default permitem atribuir valores padrão aos parâmetros
const parametrizar = (texto = 'Eu sou um gato!') => texto;
exibir(parametrizar());
exibir(parametrizar('Isso é verdade!'));

// O operador rest possibilita a utilização de parâmetros não declarados na função
function somar (...valores)
{
    let resultado = 0;
    valores.forEach(valor => resultado += valor);
    return resultado;
};
exibir(somar(1, 2, 3, 4));