function calcularDivisao (dividendo, divisor)
{
    console.log(`Dividendo: ${dividendo}`);
    console.log(`Divisor: ${divisor}`);
    
    let divisao = dividendo / divisor;
    let resto = dividendo % divisor;
    
    console.log(`Divisão: ${divisao}`);
    console.log(`Resto: ${resto}\n`);
};

calcularDivisao(10, 5);
calcularDivisao(7, 3);