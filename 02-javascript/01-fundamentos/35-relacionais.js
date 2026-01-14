console.log('01)', '7' == 7 ? 'Igual' : 'Diferente'); // Compara apenas valores
console.log('02)', '7' === 7 ? 'Igual' : 'Diferente'); // Compara valores e tipos
console.log('03)', '7' != 7 ? 'Diferente' : 'Igual'); // Compara apenas valores
console.log('04)', '7' !== 7 ? 'Diferente' : 'Igual'); // Compara valores e tipos

console.log('05)', '7' > 3 ? 'Maior' : 'Menor ou igual'); // Compara apenas valores
console.log('06)', '7' < 3 ? 'Menor' : 'Maior ou igual'); // Compara apenas valores
console.log('07)', '7' >= 3 ? 'Maior ou igual' : 'Menor'); // Compara apenas valores
console.log('08)', '7' <= 3 ? 'Menor ou igual' : 'Maior'); // Compara apenas valores

const primeiraData = new Date(0);
const segundaData = new Date(0);
console.log('09)', primeiraData === segundaData ? 'Estritamente igual' : 'Igual ou diferente'); // Compara valores e tipos
console.log('10)', primeiraData == segundaData ? 'Igual' : 'Diferente'); // Compara apenas valores
console.log('11)', primeiraData.getTime() === segundaData.getTime() ? 'Estritamente igual' : 'Igual ou diferente'); // Compara valores e tipos

console.log('12', undefined == null ? 'Igual' : 'Diferente'); // Compara apenas valores
console.log('13', undefined === null ? 'Estritamente igual' : 'Igual ou diferente'); // Compara apenas valores