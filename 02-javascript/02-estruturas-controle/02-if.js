function avaliar(valor)
{
    if(valor >= 6) // Sem chaves, só pode possuir uma linha associada
        console.log(valor);
        console.log('Fim.'); // Não pertence à condicional
};

avaliar(5.9);
avaliar(9);

function testar(numero) {
    if(numero >= 6); // O ponto e vírgula quebra a condicional aqui
    { // Não pertence à condicional (cria um bloco independente)
        console.log(numero);
    };
};

testar(4.5);
testar(7.8);