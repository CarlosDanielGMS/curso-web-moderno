function avaliarAluno (codigo, notas)
{
    notas.sort((a, b) => b - a);
    media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;

    const aluno =
    {
        codigo,
        notas,
        media,
        avaliacao: media >= 5 ? 'Aprovado' : 'Reprovado'
    };

    console.log(aluno);
};

avaliarAluno(7, [8.9, 7.3, 4.6]);
avaliarAluno(10, [5.7, 4.9, 7.8]);
avaliarAluno(15, [1.5, 4.2, 6.0]);