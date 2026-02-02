// Map armazena coleções de pares chave-valor
// Ela permite uma maior flexibilidade para definir os tipos das chaves

// Instancia um map
const carros = new Map();

// Adiciona entradas ao map
carros.set('Civic', { isEsportivo: true });
carros.set('Golf', { isEsportivo: false });

// Exibe as entradas do map
console.log(carros.Civic); // Não funciona
console.log(carros.get('Civic')); // Funciona

// Instancia e atribui a um map
const chavesVariadas = new Map
(
    [
        [function () { }, 'é uma função'],
        [{}, 'é um objeto'],
        [123, 'é um número']
    ]
);

// Exibe as entradas do map
chavesVariadas.forEach
(
    (valor, chave) =>
    {
        console.log(chave, valor);
    }
);

// Verifica se há uma entrada no map
console.log(chavesVariadas.has(123));

// Apaga uma entrada do map
chavesVariadas.delete(123);

// Verifica se há uma entrada no map
console.log(chavesVariadas.has(123));

// Exibe a quantidade de entradas que existem no map
console.log(chavesVariadas.size);

// Maps não permitem uma chave com mais de um valor
chavesVariadas.set(456, 'um');
chavesVariadas.set(456, 'dois'); // Substitui o valor anterior da entrada

// Exibe o map
console.log(chavesVariadas);