let primeiroValor = 1;
let segundoValor = 2;

primeiroValor++; // Incrementa o primeiro valor em 1
console.log('Resultado do incremento: ' + primeiroValor);

--primeiroValor; // Decrementa o primeiro valor em 1
console.log('Resultado do decremento: ' + primeiroValor);

// Exibe verdadeiro, pois a ordem de execução respeita a precedência: prefixo => igualdade => pós-fixo
console.log('Resultado da igualdade usando prefixos: ' + (++primeiroValor === segundoValor--));

// Exibe falso, pois os valores são diferentes
console.log('Resultado da igualdade estrita: ' + (primeiroValor === segundoValor));