// A criação de uma variável mais de uma vez implica em sua substituição
var numero = 7;

{
    var numero = 9;
    
    console.log('Dentro do escopo: ' + numero);
}

console.log('Fora do escopo: ' + numero);