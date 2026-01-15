// Exibe undefined, pois a variável var é sempre global e aplica a técnica hoisting (movendo a declaração implicitamente pra cima)
console.log('Primeiro valor da variável "a" (var): ' + a);
var a = 7;
console.log('Segundo valor da variável "a" (var): ' + a);

// Exibe um erro, pois a variável let respeita os escopos e não se aplica a técnica hoisting
// console.log('Primeiro valor da variável "b" (let): ' + b);
let b = 7;
console.log('Segundo valor da variável "b" (let): ' + b);