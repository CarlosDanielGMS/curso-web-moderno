const valores = [7.5, 9.1, 5.9, 8.3]; // Declara uma constante e atribui a ela um vetor com 4 valores
console.log(valores[1], valores[3]); // Exibe os valores nos índices 1 e 3 do vetor
console.log(valores[4]); // Exibe undefined, uma vez que não há nenhum valor no índice 4 do vetor

valores[4] = 4.8; // Atribui um valor à posição 4 do vetor
console.log(valores); // Exibe todos os valores do vetor
console.log(valores.length); // Exibe a quantidade de elementos do vetor

valores.push({id: 7}, null, false, 'teste'); // Adiciona novos elementos ao vetor, inclusive de outros tipos
console.log(valores); // Exibe todos os valores do vetor

console.log(valores.pop()); // Remove e exibe o último elemento do vetor
delete valores[3] // Remove o elemento no índice 3 do vetor
console.log(valores); // Exibe todos os valores do vetor

console.log(typeof valores); // Exibe o tipo da constante 'valores'