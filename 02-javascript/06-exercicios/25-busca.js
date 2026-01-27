const exibir = mensagem => console.log(mensagem);
function buscarPalavrasSemelhantes (palavraBuscada, palavrasFornecidas)
{
    let palavrasSemelhantes = [];

    for (let palavra of palavrasFornecidas)
    {
        if (palavra.includes(palavraBuscada)) palavrasSemelhantes.push(palavra);
    };

    return palavrasSemelhantes;
};

exibir(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
exibir(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));