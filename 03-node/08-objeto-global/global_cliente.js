// Importa o objeto
require('./global');

// Invoca a função
console.log(aplicacao.dizer());

// Atributos e funções globais podem ser manipuladas por qualquer arquivo
aplicacao.nome = 'Hacker'; // Má prática
console.log(`Nome da aplicação: ${aplicacao.nome}`);