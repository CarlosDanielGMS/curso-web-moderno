// Muitas coisas são, no fim das contas, funções
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// Atribui novas funções
String.prototype.reverter = function ()
{
    return this.split('').reverse().join('');
};

console.log('Carlos Daniel'.reverter());

Array.prototype.primeiro = function ()
{
    return this[0];
};

console.log([9, 8, 7, 6, 5].primeiro());
console.log(['x', 'y', 'z'].primeiro());

// Sobrescreve funções existentes (má prática)
String.prototype.toString = function ()
{
    return 'Deu tudo errado...';
};

console.log('Daniel'.reverter());