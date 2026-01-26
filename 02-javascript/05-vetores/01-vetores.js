// Instâncias de vetores são do tipo Object
console.log(typeof Array, typeof new Array, typeof []);

// Primeira forma de criar um vetor
let alunos = new Array('Daniel', 'Eslhânio', 'Neta');
console.log(alunos);

// Segunda forma de criar um vetor
let aprovados = ['Eslhânio', 'Neta'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]); // Exibe undefined

// Primeira forma de adicionar um elemento a um vetor
aprovados[2] = 'Daniel';

// Segunda forma de adicionar um elemento a um vetor
aprovados.push('João');

console.log(aprovados.length); // Exibe a quantidade de elementos presentes no vetor

// A adição de um elemento a um vetor em uma posição maior que a próxima vazia preenche o intervalo com undefineds
aprovados[9] = 'Nícolas';
console.log(aprovados.length); // O tamanho do vetor passa a ser o referente ao último elemento preenchido
console.log(aprovados); // Os elementos undefined são exibidos como itens vazios

aprovados.sort(); // Ordena os elementos do vetor em ordem crescente
console.log(aprovados);

delete aprovados[2]; // Apaga um elemento do vetor
console.log(aprovados);

aprovados = ['Daniel', 'João', 'Nícolas'];
aprovados.splice(1, 2) // Exclui 2 elementos do vetor a partir da posição 1
console.log(aprovados);