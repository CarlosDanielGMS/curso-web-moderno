function compras(primeiroServico, segundoServico)
{
    const comprarSorvete = primeiroServico || segundoServico;
    const comprarCarro = primeiroServico && segundoServico;
    // const comprarMoto = !!(primeiroServico ^ segundoServico); // Forma alternativa de implementar o ou exclusivo
    const comprarMoto = primeiroServico != segundoServico;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarCarro, comprarMoto, manterSaudavel };
};

console.log('Ambos os serviços deram certo:\n');
console.log(compras(true, true));

// Apenas o primeiro serviço deu certo
console.log('\nApenas o primeiro serviço deu certo:\n');
console.log(compras(true, false));

// Apenas o segundo serviço deu certo
console.log('\nApenas o segundo serviço deu certo:\n');
console.log(compras(false, true));

// Nenhum dos serviços deram certo
console.log('\nNenhum dos serviços deram certo:\n');
console.log(compras(false, false));