var a = 7;
let b = 8;

var a = 70; // Utilizando var, a mesma variável pode ser declarada mais de uma vez
b = 80; // Utilizando let, a mesma variável não pode ser declarada mais de uma vez

console.log(a, b);

// Por serem variáveis, tanto var quanto let permitem atribuir valor mais de uma vez
a = 700;
b = 800;

console.log(a, b);

const c = 9;
// c = 90; Por ser uma constante, const só permite atribuir valor uma única vez

console.log(c);