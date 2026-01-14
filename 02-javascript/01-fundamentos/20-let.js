// A criação de uma variável let mais de uma vez implica em escopos diferentes
let numero = 7;

{
    let numero = 9;
    
    console.log('Dentro do escopo: ' + numero);
}

console.log('Fora do escopo: ' + numero);