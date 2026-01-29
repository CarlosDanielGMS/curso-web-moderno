// Em Node.js (padrão CommonJS), cada arquivo representa um módulo
// Cada módulo representa um conjunto de códigos protegido de outros módulos
// Esses códigos podem ser importados e exportados manualmente

// Primeira forma de exportar um código
this.saudacao = 'A paz de Deus!';

// Segunda forma de exportar um código
exports.boasVindas = 'Seja muito bem-vindo(a) ao Node.js!';

// Terceira forma de exportar um código
module.exports.despedida = 'Até mais!';