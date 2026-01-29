// Primeira forma de importar um módulo (referência a módulo personalizado usando caminho relativo, boa prática)
const moduloA1 = require('../../modulo_a'); // Busca em dois diretórios anteriores
console.log(moduloA1.saudacao);

// Segunda forma de importar um módulo (referência a módulo personalizado usando caminho absoluto, má prática)
// const moduloA2 = require('C:\Users\Daniel\Documents\GitHub\curso-web-moderno\03-node\03-require-modulos\modulo_a.js');
// console.log(moduloA2.saudacao);

// Terceira forma de importar um módulo (referência a módulo personalizado usando index, boa prática)
const primeiraSaudacao = require('./pasta-c');
console.log(primeiraSaudacao.primeiraSaudacao);

// Quarta forma de importar um módulo (referência a módulo de terceiros, boa prática)
const segundaSaudacao = require('saudacao'); // Módulo personalizado criado apenas para ilustrar, má prática
console.log(segundaSaudacao.segundaSaudacao);

// Quinta forma de importar um módulo (referência a módulo do próprio Node.js, boa prática)
const http = require('http');
http.createServer
(
    (requisicao, resposta) =>
    {
        resposta.write('A paz de Deus!');
        resposta.end();
    }
).listen(8080);