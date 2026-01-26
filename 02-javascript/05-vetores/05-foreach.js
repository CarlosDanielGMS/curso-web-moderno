Array.prototype.forEach2 = function (callback)
{
    for (let indice = 0; indice < this.length; indice++)
    {
        callback(this[indice], indice, this);
    };
};

const componentes = ['Placa-mãe', 'Processador', 'Memória RAM', 'Armazenamento', 'Fonte'];

function exibir (componente, indice, vetor)
{
    console.log(`${indice + 1}) ${componente} ... ${vetor}`);
};
componentes.forEach2(exibir);