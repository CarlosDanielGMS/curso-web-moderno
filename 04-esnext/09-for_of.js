// For of permite percorrer os valores de diferentes estruturas de dados

// Percorrendo strings
const nome = 'Daniel';
for (let letra of nome) console.log(letra);

// Percorrendo vetores
const linguagens = ['JavaScript', 'C#', 'C++', 'C'];
for (let linguagem of linguagens) console.log(linguagem);

// Percorrendo maps
const assuntos = new Map
(
    [
        ['Variáveis', { estudado: true }],
        ['Funções', { estudado: true }],
        ['Objetos', { estudado: true }],
        ['Promise', { estudado: false }]
    ]
);
for (let assunto of assuntos) console.log(assunto);

// Percorrendo chaves de maps
for (let chave of assuntos.keys()) console.log(chave);

// Percorrendo valores de maps
for (let valor of assuntos.values()) console.log(valor);

// Percorrendo pares chave-valor de maps
for (let [chave, valor] of assuntos.entries()) console.log(chave, valor);

// Percorrendo sets
const letras = new Set(['a', 'b', 'c']);
for (let letra of letras) console.log(letra);