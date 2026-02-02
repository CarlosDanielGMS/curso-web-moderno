// Async/Await permite aguardar a conclusão de um processo assíncrono (retorno de uma promessa) antes de avançar a execução do código
function executarEm (segundos = 2) // Declara a função que cria a promessa com 2 segundos como padrão
{
    return new Promise // Retorna a instância da promessa
    (
        function (resolver, rejeitar) // Passa como parâmetro uma função que vai fazer algo e, de acordo com o resultado, chamar as funções que recebeu como parâmetro
        {
            setTimeout(resolver, segundos * 1000); // Aguarda o tempo em segundos passado como parâmetro e invoca uma das funções passadas como parâmetro
        }
    );
};

// Forma padrão de execução
// executarEm().then(() => console.log('Executando primeira promessa...'))
//             .then(executarEm)
//             .then(() => console.log('Executando segunda promessa...'))
//             .then(executarEm)
//             .then(() => console.log('Executando terceira promessa...'))
//             .then(executarEm)

// Nova forma de execução
async function executar (intervaloSegundos) // Declara a função responsável por executar as promessas, onde uso do termo 'async' é obrigatório
{
    let segundosPassados = 0; // Declara a variável que armazena o tempo total da operação

    await executarEm(intervaloSegundos); // Invoca a função responsável por retornar a promessa usando o termo 'await', que aguarda o retorno da promessa antes de continuar a execução do código
    console.log(`Executando primeiro Async/Await (${segundosPassados += intervaloSegundos}s)...`);
    
    await executarEm(intervaloSegundos); // Invoca a função responsável por retornar a promessa usando o termo 'await', que aguarda o retorno da promessa antes de continuar a execução do código
    console.log(`Executando segundo Async/Await (${segundosPassados += intervaloSegundos}s)...`);

    await executarEm(intervaloSegundos); // Invoca a função responsável por retornar a promessa usando o termo 'await', que aguarda o retorno da promessa antes de continuar a execução do código
    console.log(`Executando terceiro Async/Await (${segundosPassados += intervaloSegundos}s)...`);

    return segundosPassados; // Retorna a variável que armazena o tempo total da operação
};

// Acessa o valor retornado pela função responsável pela execução das funções que retornam as promessas
executar(3).then(segundos => console.log(`Tempo total passado: ${segundos}s`));