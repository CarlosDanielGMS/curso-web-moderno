const vetor = [];

for (let i = 0; i <= 10; i++) {
    vetor.push(
        function () {
            console.log('Valor da variável "i": ' + i);
        })
};

vetor[3]();
vetor[7]();