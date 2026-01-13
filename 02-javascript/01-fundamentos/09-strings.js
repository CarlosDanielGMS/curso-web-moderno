const escola = 'Cod3r'

console.log(escola.charAt(2)); // Retorna o caractere no índice 2 do vetor (que começa com 0)
console.log(escola.charAt(7)); // Retorna vazio, pois o vetor não possui nenhum elemento no índice 7
console.log(escola.charCodeAt(3)); // Retorna o código do caractere no índice 3 do vetor
console.log(escola.indexOf('d')); // Retorna o índice do caractere d no vetor
console.log(escola.substring(1)); // Retorna a string a partir do índice 1 do vetor
console.log(escola.substring(1, 3)); // Retorna a string entre os índices 1 e 3 do vetor
console.log('Escola '.concat(escola).concat('!')); // Retorna diversas strings concatenadas
console.log(escola.replace(3, 'e')); // Retorna a string substituindo o caractere 3 pelo e
console.log('Daniel, Neta, Lano'.split(', ')); // Retorna um vetor de strings separando a strings a cada vírgula e espaço