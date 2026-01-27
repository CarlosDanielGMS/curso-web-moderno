const exibir = mensagem => console.log(mensagem);
function calcularAreaTriangulo (base, altura)
{
    return (base * altura / 2).toFixed(2);
};

exibir(calcularAreaTriangulo(10, 15));
exibir(calcularAreaTriangulo(7, 9));
exibir(calcularAreaTriangulo(9.25, 13.1));