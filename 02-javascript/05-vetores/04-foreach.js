const componentes = ['Placa-mãe', 'Processador', 'Memória RAM', 'Armazenamento', 'Fonte'];

// Primeira forma de usar o 'forEach'
function exibir (componente, indice, vetor)
{
    console.log(`${indice + 1}) ${componente} ... ${vetor}`);
};
componentes.forEach(exibir);

// Segunda forma de usar o 'forEach'
componentes.forEach
(
    function (componente, indice, vetor)
    {
        console.log(`${indice + 1}) ${componente} ... ${vetor}`);
    }
);

// Terceira forma de usar o 'forEach'
componentes.forEach((nome, indice, vetor) => console.log(`${indice + 1}) ${nome} ... ${vetor}`));