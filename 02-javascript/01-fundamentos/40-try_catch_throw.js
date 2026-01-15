function tratarErro(erro)
{
    // throw new Error('Erro tratado!'); // Exibe erro completo e mensagem
    // throw 'Erro tratado!'; // Exibe erro reduzido e mensagem
    // Exibe nome, mensagem e data do erro
    throw {
        nome: erro.name,
        mensagem: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(objeto)
{
    try // Tenta executar o código
    {
        console.log(objeto.name.toUpperCase() + '!!!');
    }
    catch (erro) // Tenta tratar o erro, se houver
    {
        tratarErro(erro);
    }
    finally // Exibe uma mensagem padrão, independentemente se houve erro ou não
    {
        console.log('Fim da aplicação.');
    }
};

const pessoa = { nome: 'Daniel' };
imprimirNomeGritado(pessoa);