const pai =
{
    nome: 'Tomaz',
    corCabelo: 'Branco'
};

const filha1 = Object.create(pai); // Cria o objeto 'filha1' herdando do objeto 'pai'
filha1.nome = 'Evelize'; // Altera o nome do objeto
console.log(filha1.corCabelo); // Exibe a cor do cabelo herdado

const filha2 = Object.create // Cria o objeto 'filha2'
(
    pai, // Herda do objeto 'pai'
    {
        nome: // Sobrescreve o atributo 'nome'
        {
            value: 'Estela',
            enumerable: true,
            writable: false
        }
    }
);
console.log(filha2.nome);
filha2.nome = 'Evelize'; // Tenta sobrescrever o atributo 'nome', mas não funciona em função do atributo 'writable = false'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Exibe nome e cor do cabelo, confirmando que o nome não foi sobrescrito

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let chave in filha2)
{
    filha2.hasOwnProperty(chave) ? console.log(`Por posse: ${chave}`) : console.log(`Por herança: ${chave}`); // Confirma se o objeto 'filha2' tem os atributos via posse ou herança
};