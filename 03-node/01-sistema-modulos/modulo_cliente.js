const exibir = mensagem => console.log(mensagem);

// Importação de códigos/módulos no Node.js seguindo o padrão CommonJS
const moduloA = require('./modulo_a');
const moduloB = require('./modulo_b');

// Utilização de códigos/módulos importados
exibir(moduloA.saudacao);
exibir(moduloA.boasVindas);
exibir(moduloA.despedida);
exibir(moduloA);

exibir(moduloB.bomDia);
exibir(moduloB.boaNoite());
exibir(moduloB);