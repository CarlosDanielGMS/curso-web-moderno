for (var i = 0; i <= 10; i++)
{
    console.log('Valor da variável "i" dentro do laço: ' + i);
};

// Exibe o último valor atribuído à variável "i", pois trata-se de um var (que sempre é global)
console.log('Valor da variável "i" fora do laço: ' + i);