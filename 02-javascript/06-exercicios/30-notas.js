const exibir = mensagem => console.log(mensagem);

function calcularMedia (vetor)
{
    let quantidade = vetor.length;
    let soma = vetor.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
    return soma / quantidade;
};

function checarMelhor (estudantes)
{
    const estudantesExtraidos = Object.entries(estudantes);
    const estudantesMapeados = estudantesExtraidos.map
    (
        estudante =>
        {
            const indiceNome = 0;
            const indiceNotas = 1;

            return { nome: estudante[indiceNome], media: calcularMedia(estudante[indiceNotas]) };
        }
    );
    const estudantesOrdenados = estudantesMapeados.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media);
    const melhorEstudante = estudantesOrdenados[0];

    return melhorEstudante;
};

const estudantes =
{
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
};

exibir(checarMelhor(estudantes));