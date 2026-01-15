// Primeiro contexto léxico
const saudacao = 'Olá!';

// Segundo contexto léxico
function saudar()
{
    const saudacao = 'Bom dia!!!';
    return saudacao;
}

// Terceiro contexto léxico
const pessoa =
{
    nome: 'Daniel',
    idade: 25,
    peso: 75,
    endereco:
    {
        rua: 'Tal e Coisa Coisa e Tal',
        numero: 587
    }
};

console.log(saudacao);
console.log(saudar());
console.log(pessoa);