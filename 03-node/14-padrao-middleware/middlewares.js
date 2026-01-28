// Padrão Middleware (Middleware Pattern) => Cadeia de Responsabilidade (Chain of Responsibility)
function primeiroPasso (contexto, proximo)
{
    contexto.primeiroValor = 'primeiroIntermediário';
    proximo();
};

function segundoPasso (contexto, proximo)
{
    contexto.segundoValor = 'segundoIntermediário';
    proximo();
};

const terceiroPasso = contexto => contexto.terceiroValor = 'terceiroIntermediário';

function executar (contexto, ...intermediarios)
{
    function executarPasso (indice)
    {
        if (intermediarios && indice < intermediarios.length)
        {
            intermediarios[indice]
            (
                contexto,
                () => { executarPasso(++indice) }
            );
        }
    }
    executarPasso(0);
};

const contexto = {};
executar(contexto, segundoPasso, primeiroPasso, terceiroPasso);
console.log(contexto);