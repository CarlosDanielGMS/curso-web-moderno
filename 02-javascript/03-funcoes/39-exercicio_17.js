function aumentarSalario (plano, salario)
{
    let aumento = salario;

    switch (plano)
    {
        case 'A':
            aumento += salario * 0.10;
            console.log(`O funcionário, pertencente ao plano ${plano} com o salário de R$ ${salario}, receberá um aumento para R$ ${aumento}.`);
            
            break;
        case 'B':
            aumento += salario * 0.15;
            console.log(`O funcionário, pertencente ao plano ${plano} com o salário de R$ ${salario}, receberá um aumento para R$ ${aumento}.`);
            break;
        case 'C':
            aumento += salario * 0.20;
            console.log(`O funcionário, pertencente ao plano ${plano} com o salário de R$ ${salario}, receberá um aumento para R$ ${aumento}.`);
            break;
        default:
            console.log('Plano inválido.');
            break;
    }
}

aumentarSalario('A', 2000);
aumentarSalario('B', 1000);
aumentarSalario('C', 500);
aumentarSalario('D', 3000);