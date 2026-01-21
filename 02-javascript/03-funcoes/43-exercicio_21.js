function calcularPlano (idade)
{
    let valor = 100;

    if (idade < 10)
    {
        valor += 80;
    }
    else if (idade >= 10 && idade <= 30)
    {
        valor += 50;
    }
    else if (idade > 30 && idade <= 60)
    {
        valor += 95;
    }
    else
    {
        valor += 130;
    };

    console.log(`Valor a ser pago pelo plano de saúde considerando a idade de ${idade} anos: R$ ${valor}`);
};

calcularPlano(7);
calcularPlano(10);
calcularPlano(41);
calcularPlano(69);