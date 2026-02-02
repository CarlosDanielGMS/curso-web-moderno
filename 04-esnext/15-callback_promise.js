// Executa uma função atrás da outra, dentro de um intervalo de tempo, no formato de callbacks (má prática de função assíncrona, "Callback Hell")
setTimeout // Declara o primeiro atraso de execução
(
    function () // Executa a primeira função
    {
        console.log('Executando a primeira callback...');

        setTimeout // Declara o segundo atraso de execução
        (
            function () // Executa a segunda função
            {
                console.log('Executando a segunda callback...');

                setTimeout // Declara o terceiro atraso de execução
                (
                    function () // Executa a terceira função
                    {
                        console.log('Executando a terceira callback...');
                    },
                    2000 // Aguarda 2 segundos
                );
            },
            2000 // Aguarda 2 segundos
        );
    },
    2000 // Aguarda 2 segundos
);

// Executa uma função atrás da outra, dentro de um intervalo de tempo, no formato de promises (boa prática de função assíncrona)
function executarEm (segundos = 2) // Declara a função que cria a promessa com 2 segundos como padrão
{
    return new Promise // Retorna a instância da promessa
    (
        function (resolver, rejeitar) // Passa como parâmetro uma função que vai fazer algo e, de acordo com o resultado, chamar as funções que recebeu como parâmetro
        {
            setTimeout // Declara o primeiro atraso de execução
            (
                function () // Executa a função
                {
                    console.log('Executando promise...');
                    resolver(); // Invoca a função passada como parâmetro para fazer algo caso o processo tenha sido executado corretamente
                },
                segundos * 1000 // Aguarda os segundos passados como parâmetro
            );
        }
    );
};

executarEm().then(executarEm) // Invoca, após o retorno da promessa, a função passada como parâmetro
            .then(executarEm); // Encadeia outra invocação da função passada como parâmetro