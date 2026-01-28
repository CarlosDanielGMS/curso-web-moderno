// Dentro do arquivo, 'this' aponta para 'module.exports'
console.log('Dentro de um arquivo...');
console.log(`'this' é igual a 'global'? ${this === global}`);
console.log(`'this' é igual a 'module'? ${this === module}`);
console.log(`'this' é igual a 'module.exports'? ${this === module.exports}`);
console.log(`'this' é igual a 'exports'? ${this === exports}\n`);

// Dentro de uma função, 'this' aponta para 'global'
function compararThis ()
{
    console.log('Dentro de uma função...');
    console.log(`'this' é igual a 'exports'? ${this === exports}`);
    console.log(`'this' é igual a 'module.exports'? ${this === module.exports}`);
    console.log(`'this' é igual a 'module'? ${this === module}`);
    console.log(`'this' é igual a 'global'? ${this === global}`);
}

compararThis();