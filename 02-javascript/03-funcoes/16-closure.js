const texto = 'Global';

function fora ()
{
    const texto = 'Local';

    function dentro ()
    {
        return texto;
    };

    return dentro;
};

const funcao = fora();
console.log(funcao()); // Exibe 'Local', pois o escopo utiliza a variável criada dentro da função