function calcularAnuidade (mes, valor)
{
    let montante = valor;
    let mesesAtrasados = mes - 1;

    for (let indice = mesesAtrasados; indice > 0; indice--)
    {
        montante *= 1.05;
    };

    console.log(`Valor a ser pago de anuidade considerando o pagamento de R$ ${valor} no mês ${mes}: R$ ${montante}`);
};

calcularAnuidade(1, 100);
calcularAnuidade(2, 100);
calcularAnuidade(3, 100);
calcularAnuidade(12, 100);