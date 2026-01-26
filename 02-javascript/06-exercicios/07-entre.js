const exibir = mensagem => console.log(mensagem);
function isEntre (numero, minimo, maximo, inclusivo = false)
{
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo;
};

exibir(isEntre(50, 10, 100));
exibir(isEntre(16, 100, 160));
exibir(isEntre(3, 3, 150));
exibir(isEntre(3, 3, 150, true));