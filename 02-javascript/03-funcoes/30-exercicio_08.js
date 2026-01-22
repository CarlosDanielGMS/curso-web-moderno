function verificarProgresso (pontuacoes)
{
    let pontos = pontuacoes.split(' ').map(Number);
    let maiorPontuacao = pontos[0];
    let menorPontuacao = pontos[0];
    let recordes = 0;
    let piorJogo = 0;

    for (let indice = 0; indice < pontos.length; indice++)
    {
        if (pontos[indice] > maiorPontuacao)
        {
            maiorPontuacao = pontos[indice];
            recordes++;
        }
        else if (pontos[indice] < menorPontuacao)
        {
            menorPontuacao = pontos[indice];
            piorJogo = indice + 1;
        };
    };
    
    return [recordes, piorJogo];
};

console.log(verificarProgresso('10 20 20 8 25 3 0 30 1'));
console.log(verificarProgresso('10 20 12 0 15 7 9 5 1'));