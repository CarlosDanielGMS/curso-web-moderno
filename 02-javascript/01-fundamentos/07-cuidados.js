console.log(7 / 0); // Não gera exceção e sim "Infinity"
console.log("7" / 2); // Converte a "String" em número automaticamente e realiza a operação
console.log("Teste" * 5); // Retorna "Not a Number (NaN)"
console.log(0.7 + 0.1); // Gera resultado impreciso em função das especificações do ECMAScript
// console.log(7.toString()); // Gera exceção
console.log((7).toString()); // Transforma em String
console.log((7.537).toFixed(2)); // Transforma em fração com duas casas decimais