const pecas =
[
    'Placa-mãe',
    'Processador',
    'Memória RAM',
    'SSD'
];

const componentes =
[
    'Fonte',
    'Gabinete',
    'Cooler'
];

const computador = pecas.concat(componentes, 'Placa de Vídeo', 'Leitor de Disco');

console.log(`Peças: ${pecas}`);
console.log(`Componentes: ${componentes}`);
console.log(`Computador: ${computador}`);