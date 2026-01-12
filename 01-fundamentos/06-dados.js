var nome = "NVIDIA GeForce RTX 2080 Ti";
let quantidade = 5;
var preco = 2500;
let imposto = 500;
var precoFinal = (preco + imposto) * quantidade;

console.log("Produto: " + nome);
console.log("Quantidade: " + quantidade);
console.log("Preço: R$ " + preco);
console.log("Imposto: R$ " + imposto);
console.log("Total: R$ " + precoFinal);