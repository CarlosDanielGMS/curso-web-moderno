// Padrão Middleware (Middleware Pattern) => Cadeia de Responsabilidade (Chain of Responsibility)

// Define a primeira função intermediária
function primeiroPasso (contexto, proximo)
{
    contexto.primeiroValor = 'primeiroIntermediário';
    proximo();
};

// Define a segunda função intermediária
function segundoPasso (contexto, proximo)
{
    contexto.segundoValor = 'segundoIntermediário';
    proximo();
};

// Define a terceira função intermediária
const terceiroPasso = contexto => contexto.terceiroValor = 'terceiroIntermediário';

// Define a função que gerencia a execução em cadeia dos intermediários (middlewares)
function executar (contexto, ...intermediarios)
{
    // Define a função recursiva que percorre o vetor de funções intermediárias
    function executarPasso (indice)
    {
        // Verifica se ainda existem funções para executar no vetor
        if (intermediarios && indice < intermediarios.length)
        {
            intermediarios[indice]
            (
                contexto,
                () => { executarPasso(++indice) } // Invoca a próxima função intermediária
            );
        }
    }
    executarPasso(0); // Inicia a execução a partir da primeira função intermediária presente no vetor (índice 0)
};

// Define o objeto inicial a ser utilizado na execução
const contexto = {};

// Executa a cadeia passando o contexto e a ordem desejada das funções
executar(contexto, segundoPasso, primeiroPasso, terceiroPasso);

// Exibe o resultado final da execução
console.log(contexto);