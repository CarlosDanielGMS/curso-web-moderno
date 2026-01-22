// A constante 'produto' aponta para um endereço de memória que descreve o objeto
const produto = { nome: 'Placa de Vídeo' };
produto.nome = 'Processador'; // Atribui um novo valor para o atributo, sem mudar o endereço de memória do objeto
console.log(produto);

// A atribuição de outro objeto para a constante 'produto' não funciona, pois mudaria o endereço de memória
// produto = { nome: 'Memória' }; // Exibe erro
// console.log(produto);

// "Congela" o objeto 'produto', impedindo que os seus atributos sejam alterados
Object.freeze(produto);
produto.nome = 'SSD';
produto.quantidade = 5;
delete produto.nome;
console.log(produto); // Continua exibindo o objeto em seu estado antes de ser congelado

// Cria um objeto já congelado
const produtoCongelado = Object.freeze({ nome: 'Pen Drive' });
produtoCongelado.nome = 'HD';
console.log(produtoCongelado);