function calcularTempoUltrapassagem (alturaMenor, taxaMenor, alturaMaior, taxaMaior)
{
    let quantidadeAnos = 0;

    while (alturaMenor < alturaMaior)
    {
        alturaMenor += taxaMenor;
        alturaMaior += taxaMaior;

        quantidadeAnos++;
    };

    return quantidadeAnos;
};

function verificarCrescimento (primeiraCrianca, segundaCrianca)
{
    if (primeiraCrianca.altura == segundaCrianca.altura)
    {
        console.log(`${primeiraCrianca.nome} e ${segundaCrianca.nome} possuem a mesma altura.`);
    }
    else
    {
        if (primeiraCrianca.altura < segundaCrianca.altura)
        {
            if (primeiraCrianca.taxa <= segundaCrianca.taxa)
            {
                console.log(`${primeiraCrianca.nome} é menor que ${segundaCrianca.nome} e nunca será maior que ele.`);
            }
            else
            {
                console.log(`${primeiraCrianca.nome} é menor que ${segundaCrianca.nome} e será maior que ele em ${calcularTempoUltrapassagem(primeiraCrianca.altura, primeiraCrianca.taxa, segundaCrianca.altura, segundaCrianca.taxa)} anos.`);
            };
        }
        else
        {
            if (segundaCrianca.taxa <= primeiraCrianca.taxa)
            {
                console.log(`${segundaCrianca.nome} é menor que ${primeiraCrianca.nome} e nunca será maior que ele.`);
            }
            else
            {
                console.log(`${segundaCrianca.nome} é menor que ${primeiraCrianca.nome} e será maior que ele em ${calcularTempoUltrapassagem(segundaCrianca.altura, segundaCrianca.taxa, primeiraCrianca.altura, primeiraCrianca.taxa)} anos.`);
            };
        };
    };
};

const joao =
{
    nome: 'João',
    altura: 150,
    taxa: 2
};

const nicolas =
{
    nome: 'Nícolas',
    altura: 130,
    taxa: 4
};

verificarCrescimento(joao, nicolas);