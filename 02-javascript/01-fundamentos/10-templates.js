const nome = 'Daniel';

const concatenacao = 'Olá, ' + nome + '!'; // Primeira forma de concatenar
console.log(concatenacao);

// Segunda forma de concatenar, substituindo o trecho do nome pelo valor da variável nome
const template =
`
Olá,
${nome}!
`
console.log(template);

// Usando templates para realizar cálculos dentro da exibição
console.log(`7 + 3 = ${3 + 7}`); // Importante usar crase e não aspas para funcionar corretamente

// Invoca função que transforma todas as letras em maiúscula
const maiuscula = texto => texto.toUpperCase();
console.log(`Ei... ${maiuscula('cuidado')}!`);