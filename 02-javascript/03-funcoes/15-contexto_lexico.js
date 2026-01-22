const valor = 'Global';

function exibirValor ()
{
    console.log(valor);
};

function executarFuncao ()
{
    const valor = 'Local';

    exibirValor();
};

executarFuncao(); // Exibe 'Global', pois a variável declarada dentro da função respeita o contexto léxico