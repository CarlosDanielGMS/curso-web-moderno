function exibir (...mensagens)
{
    let texto = '';

    for (let mensagem of mensagens)
    {
        texto = texto.concat(mensagem, ' ');
    };

    console.log(texto);
};

const instanciaObjeto =
{
    a: 1,
    b: 2,
    c: 3
};

// A oitava versão do ECMAScript introduziu as novidades abaixo...

// Introduziu a função Object.values(), que extrai os valores para um vetor
const valores = Object.values(instanciaObjeto);
console.log(valores);

// Introduziu a função Object.entries(), que extrai as combinações chave/valor para um vetor
const chaveValores = Object.entries(instanciaObjeto);
console.log(chaveValores);

// Eliminou a necessidade de algumas notações
const nome = 'Daniel';
const pessoa =
{
    nome, // Não é mais obrigatório seguir o padrão 'nome: nome'
    saudar () // Não é mais obrigatório seguir o padrão 'saudar: function () ...'
    {
        return `A paz de Deus!`;
    }
};
exibir(`${pessoa.nome}: ${pessoa.saudar()}`);

// Introduziu as classes
class Animal
{
    emitirSom = () => 'Emitindo som...'
};
class Cachorro extends Animal
{
    emitirSom = () => 'Au Au!'
};
class Boi extends Animal
{
    emitirSom = () => 'Muuuu!'
};
class Generico extends Animal
{
    
};
exibir(new Cachorro().emitirSom());
exibir(new Generico().emitirSom());
exibir(new Boi().emitirSom());