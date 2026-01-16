// A função pode ou não retornar algo
function area (largura, altura)
{
    const area = largura * altura;

    if (area > 25)
    {
        console.log(`Valor acima do permitido: ${area}m²`);
        
    }
    else
    {
        return area;
    };
};

console.log(area(7, 3)); // Exibe a área normalmente
console.log(area(2)); // Exibe NaN
console.log(area()); // Exibe NaN
console.log(area(7, 3, 9, 0, 5)); // Exibe a área com base nos dois primeiros parâmetros e ignora o resto
console.log(area(10, 30)); // Exibe a mensagem personalizada da função e undefined