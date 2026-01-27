const exibir = mensagem => console.log(mensagem);
function sortear (numero, minimo = 1, maximo = 10)
{
    let numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numeroSorteado == numero ? `Parabéns! O número sorteado foi o ${numeroSorteado}` : `Que pena! O número sorteado foi o ${numeroSorteado}`;
};

exibir(sortear(10));
exibir(sortear(5));
exibir(sortear(5));