// Cria o vetor
const marcas = ['Patek Philippe', 'Richard Mille', 'Audemars Piguet'];

// Cria a função que será usada no callback
const exibir = (nome, indice) => console.log(`${indice + 1} - ${nome}`);

// Passa a função como parâmetro para o callback
marcas.forEach(exibir);