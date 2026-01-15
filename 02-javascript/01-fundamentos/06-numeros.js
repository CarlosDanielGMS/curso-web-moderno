const peso1 = 1.0;
const peso2 = Number('2.5');

console.log("Peso 1: " + peso1);
console.log("Peso 2: " + peso2);

if (Number.isInteger(peso1)) {
    console.log("Peso 1 é inteiro!");
} else {
    console.log("Peso 1 não é inteiro!");
};

if (Number.isInteger(peso2)) {
    console.log("Peso 2 é inteiro!");
} else {
    console.log("Peso 2 não é inteiro!");
};

const avaliacao1 = 7.23;
const avaliacao2 = 8.54;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log("Média com duas casas decimais: " + media.toFixed(2)); // Arredonda a média para duas casas decimais
console.log("Média em binário: " + media.toString(2)); // Exibe a média como valor binário
console.log("Tipo da média: " + typeof media); // Exibe o tipo da média
console.log("Tipo de 'Number': " + typeof Number); // Exibe o tipo da função 'Number'