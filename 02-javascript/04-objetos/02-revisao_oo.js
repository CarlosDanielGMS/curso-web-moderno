// Objeto é uma coleção de pares chave/valor
const pessoa = new Object;
pessoa.nome = 'Daniel';
pessoa.idade = 25;
pessoa['possui filhos'] = false;

console.log(pessoa);

delete pessoa.idade;
delete pessoa['possui filhos'];
console.log(pessoa);

const carro =
{
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2008,
    valor: 49990,
    proprietario:
    {
        nome: 'Daniel',
        idade: 25,
        endereco:
        {
            logradouro: 'Rua Tal',
            numero: 587,
            bairro: 'Centro'
        }
    },
    condutores:
    [
        {
            nome: 'Lano',
            idade: 39
        },
        {
            nome: 'João',
            idade: 18
        }
    ],
    calcularValorSeguro: function ()
    {
        // ...
    }
};

carro.proprietario.endereco.numero = 698;
carro['proprietario']['endereco']['logradouro'] = 'Avenida Informatiqueira'
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); // Exibe undefined, pois 'condutores' foi excluído
// console.log(carro.condutores.length); // Exibe erro, pois é impossível acessar atributo de algo indefinido