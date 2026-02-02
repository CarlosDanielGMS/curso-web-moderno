// Set é uma estrutura de dados que não aceita repetição e não é indexada

// Instancia um set
const times = new Set();

// Adiciona elementos a um set
times.add('Corinthians');
times.add('Flamengo').add('Palmeiras');
times.add('Corinthians'); // Elemento repetido não é adicionado

// Exibe os elementos do set
console.log(times);

// Exibe a quantidade de elementos presentes em um set
console.log(times.size);

// Exibe se o set possui ou não um determinado elemento
console.log(times.has('palmeiras')); // Sets são case sensitive
console.log(times.has('Palmeiras'));

// Apaga um elemento de um set
times.delete('Palmeiras');

// Exibe os elementos de um set
console.log(times);

// Instancia e atribui a um set
const nomes = new Set(['João', 'Nícolas', 'Carlos', 'Nícolas']); // Elementos repetidos só são adicionados uma vez

// Exibe os elementos de um set
console.log(nomes);