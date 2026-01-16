const pessoa =
{
    saudacao: 'A paz de Deus!',
    saudar()
    {
        console.log(this.saudacao);
    }
}

// Invoca a função diretamente
pessoa.saudar(); // Exibe a saudação corretamente

// Invoca a função após associá-la à variável
const falar = pessoa.saudar;
falar(); // Exibe 'undefined', pois perdeu o contexto do objeto após a atribuição

const citar = pessoa.saudar.bind(pessoa) // Especifica o objeto que servirá de contexto para a função
citar(); // Exibe a saudação corretamente