const quaseVetor =
{
    0: 'Daniel',
    1: 'Neta',
    2: 'Eslhânio'
};

console.log(quaseVetor);

// Substitui a função 'toString'
Object.defineProperty
(
    quaseVetor,
    'toString',
    {
        value: function () { return Object.values(this); }, // Retorna apenas os valores dos atributos
        enumerable: false // Oculta detalhes do objeto
    }
);

const vetor = ['Daniel', 'Neta', 'Eslhânio']
console.log(quaseVetor.toString(), vetor);