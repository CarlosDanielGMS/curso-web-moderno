let valor; // Variável não atribuída (aponta para um endereço de memória com o valor undefined)
console.log(valor);

valor = null; // Não aponta para nenhum objeto/valor válido
console.log(valor); // console.log(valor.toString()); Retorna um erro, pois não é possível converter um valor undefined/null para o tipo string

const pessoa = {};
console.log(pessoa.nome); // Exibe undefined, pois a variável nome não foi atribuída
console.log(pessoa); // Exibe o objeto vazio

pessoa.nome = 'Daniel'; // Atribui o nome 'Daniel' à variável
console.log(pessoa); // Exibe o objeto com o nome atribuído anteriormente

pessoa.nome = null; // Se quiser apagar o valor da variável, prefira atribuí-la a null em vez de undefined
console.log(pessoa);

delete pessoa.nome; // Se quiser apagar a variável em si, utilize delete
console.log(pessoa);