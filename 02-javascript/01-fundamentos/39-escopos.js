let a = 7; // Pertence ao "menor" escopo possível
console.log(a); // Não exibiria o valor se fosse chamado, por exemplo, global.a

global.b = 3; // Pertence ao escopo global
c = 9; // Também pertence ao escopo global, implicitamente (má prática)
console.log(global.b, c); // Não exibiria os valores se fosse chamado, por exemplo, this.a e/ou this.b

this.d = 5; // Pertence ao escopo do módulo
console.log(this.d); // Não exibiria o valor se fosse chamado, por exemplo, global.a
console.log(module.exports.d); // Outra forma de exibir d, uma vez que this === module.exports

this.e = 1; // Pertence ao escopo do módulo
console.log(module.exports); // Exibe todas as variáveis pertencentes ao módulo
