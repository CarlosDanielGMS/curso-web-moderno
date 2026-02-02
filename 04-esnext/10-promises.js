// Promise permite gerenciar o estado de uma função assíncrona
// Ela "promete" dar um retorno acerca do processo, seja informando sucesso ou fracasso

// Declara a função que retorna a promessa
function executarDeposDe (segundos)
{
    return new Promise // Instancia uma nova promessa
    (
        (resolvida, rejeitada) => // Recebe duas funções como parâmetro: uma para sucesso e outra para fracasso
        {
            setTimeout // Aguarda o intervalo de tempo parametrizado
            (
                () => { segundos <= 3 ? resolvida(`Sucesso após ${segundos}s!`) : rejeitada(new Error(`Timeout de ${segundos}s excedido...`)); }, // Invoca uma das duas funções de acordo com a verificação
                segundos * 1000
            );
        }
    );
};

// A promise possui 3 métodos de monitoramento
executarDeposDe(5) // Invoca a função
    .then(mensagem => console.log(mensagem)) // Se a promessa retornar sucesso, exibe uma mensagem
    .then(() => console.log('E agora, vamos para a próxima parte?')) // A promessa retornando sucesso, é possível executar outra função em seguida
    .catch(erro => console.log(erro.mensagem || erro)) // Se a promessa retornar fracasso, exibe outra mensagem
    .finally(() => console.log('Processo encerrado.')); // Independentemente do retorno da promessa, exibe a mensagem final