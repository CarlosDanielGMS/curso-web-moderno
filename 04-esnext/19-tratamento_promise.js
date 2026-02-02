// O tratamento de erros nas promises é feito usando o catch
function processar (valor, chanceErro) // Declara a função que 
{
    return new Promise
    (
        (resolver, rejeitar) =>
        {
            try
            {
                // cons.log('Aqui vai dar erro!');

                Math.random() < chanceErro ? rejeitar('caiu na probabilidade!') : resolver(valor);
            }
            catch (erro)
            {
                rejeitar(erro);
            };
        }
    );
};

processar('ok.', 0.5).then(valor => `Valor: ${valor}`)
                     .then
                     (
                        mensagem => console.log(mensagem),
                        erro => console.log(`Erro específico: ${erro}`)
                     )
                     .then(() => console.log('Processo quase terminando...'))
                     .catch(erro => console.log(`Erro geral: ${erro}`))
                     .then(() => console.log('Fim do processo!'));