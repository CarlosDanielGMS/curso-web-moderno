const computador = ['Placa-mãe', 'Processador', 'Memória RAM', 'Placa de vídeo'];
console.log(computador);

// Remove o último elemento do vetor
computador.pop();
console.log(computador);

// Remove o primeiro elemento do vetor
computador.shift();
console.log(computador);

// Adiciona um elemento no final do vetor
computador.push('Armazenamento');
console.log(computador);

// Adiciona um elemento no início do vetor
computador.unshift('Fonte');
console.log(computador);

// Remove o(s) elemento(s) do vetor a partir do índice
computador.splice(1, 2); // Remove dois elementos do vetor a partir do índice 1 (posição 2)
console.log(computador);

// Adiciona o(s) elemento(s) do vetor a partir do índice
computador.splice(1, 0, 'Placa de Vídeo', 'Gabinete'); // Adiciona dois elementos ao vetor a partir do índice 1 (posição 2) sem remover nenhum
console.log(computador);

// Gera um novo vetor a partir dos elementos do índice de outro vetor
const pecas = computador.slice(2);
console.log(pecas);

// Gera um novo vetor a partir dos elementos do intervalo de índices de outro vetor
const componentes = computador.slice(1, 3);
console.log(componentes);