let isAtivo = false;
console.log('Valor: ' + isAtivo);

isAtivo = true;
console.log('Valor: ' + isAtivo);

isAtivo = 1;
console.log('Valor: ' + !!isAtivo); // converte um valor em booleano

// Tipos de conversões que retornam verdadeiro
console.log('\nTipos de conversões que retornam verdadeiro:\n');

console.log('!!7: ' + !!7);
console.log('!!-7: ' + !!-7);
console.log('" ": ' + !!" ");
console.log('!!"teste": ' + !!"teste");
console.log('!![]: ' + !![]);
console.log('!!{}: ' + !!{});
console.log('!!Infinity: ' + !!Infinity);
console.log('!!(isAtivo = true): ' + !!(isAtivo = true));

// Tipos de conversões que retornam falso
console.log('\nTipos de conversões que retornam falso:\n');

console.log('!!0: ' + !!0);
console.log('"": ' + !!"");
console.log('!!null: ' + !!null);
console.log('!!NaN: ' + !!NaN);
console.log('!!undefined: ' + !!undefined);
console.log('!!(isAtivo = false): ' + !!(isAtivo = false));

// Exibe o que não for nulo
console.log('\nExibe o que não for nulo:\n');

let nome = '';
console.log('Valor da variável "nome": ' + nome);
console.log('Resultado: ' + (nome || 'Desconhecido'));