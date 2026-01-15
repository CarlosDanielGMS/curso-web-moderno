const [v] = [7];
console.log(v);

// Desestrutura ("trás pra fora") os valores dos índices 0 e 2, pulando o 1 e o 3, do vetor
const vetor = [8.5, 5.7, 9.4, 3.9];
const [a, , b, ] = vetor;
console.log(a, b);