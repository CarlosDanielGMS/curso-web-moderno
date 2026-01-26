const idades = [25, 15, 9, 62, 39];
console.log(`Vetor original: ${idades}`);

// Multiplica os elementos do vetor por 2
let idadesDuplicadas = idades.map
(
    function (valor, indice, vetor)
    {
        return valor * 2;
    }
);
console.log(`Vetor multiplicado: ${idadesDuplicadas}`);

// Soma 5 a cada elemento do vetor
const somar = elemento => elemento + 5;
let idadesSomadas = idades.map(somar);
console.log(`Vetor somado: ${idadesSomadas}`);

// Formata cada elemento do vetor para o formato de dinheiro
const transformarEmDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`;
let idadesFormatadas = idades.map(transformarEmDinheiro);
console.log(`Vetor formatado: ${idadesFormatadas}`);

// Encadeia as transformações
let idadesTransformadas = idades.map(somar).map(transformarEmDinheiro);
console.log(`Vetor transformado: ${idadesTransformadas}`);