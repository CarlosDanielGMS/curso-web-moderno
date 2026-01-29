// this, exports e module.exports apontam para o mesmo objeto
let thisExports = this === exports;
let exportsModuleExports = exports === module.exports;
let moduleExportsThis = module.exports === this;
// console.log(thisExports, exportsModuleExports, moduleExportsThis);

// Primeira forma de exportar um código
this.a = 1;

// Segunda forma de exportar um código
exports.b = 2;

// Terceira forma de exportar um código
module.exports.c = 3;

// A atribuição de um novo valor para exports não surte efeito em outros termos
exports = null;
// console.log(module.exports); // Continua exibindo 'a', 'b' e 'c'.

// A exportação deve ser realizada utilizando module.exports
module.exports =
{
    publico: true
};