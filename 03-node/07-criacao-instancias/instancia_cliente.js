// Node.js faz cache de módulos
// O cache permite manipular o mesmo módulo utilizando diferentes instâncias dele (instancia_unica.js)
// É possível contornar essa peculiaridade utilizando a exportação de funções factory (instancia_nova.js)

// Importa o módulo Instância Única
const contadorA = require('./instancia_unica');
const contadorB = require('./instancia_unica');

// Incrementa o Contador A duas vezes
contadorA.incrementar();
contadorA.incrementar();

// Exibe o valor do Contador A e do Contador B
// O valor do Contador B será o mesmo do Contador A
// Apesar de incrementar diretamente apenas o valor do Contador A, o valor do Contador B sofrerá o mesmo incremento
// Isso se dá em função do cache utilizado pelo Node.js, que reaproveita a instância do objeto (módulo) exportado
console.log(`Contador A: ${contadorA.valor}, Contador B: ${contadorB.valor}`);

// Importa o módulo Instância Nova
const contadorC = require('./instancia_nova')();
const contadorD = require('./instancia_nova')();

// Incrementa o Contador C duas vezes
contadorC.incrementar();
contadorC.incrementar();

// Exibe o valor do Contador C e do Contador D
// O valor do Contador D será diferente do Contador C
// Incrementando diretamente apenas o valor do Contador C, o valor do Contador D não sofrerá o mesmo incremento
// Isso se dá por causa da utilização da função factory, que cria uma nova instância do objeto (módulo) exportado
console.log(`Contador C: ${contadorC.valor}, Contador D: ${contadorD.valor}`);