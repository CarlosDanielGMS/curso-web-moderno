const alunos =
[
    { nome: 'João', nota: 7.3 },
    { nome: 'Maria', nota: 9.2 }
];

// Imperativo
let totalImperativo = 0;
for (let indice = 0; indice < alunos.length; indice++)
{
    totalImperativo += alunos[indice].nota;
};
let mediaImperativo = totalImperativo / alunos.length;
console.log(`Método imperativo: ${mediaImperativo}`);

// Declarativo
const getNota = aluno => aluno.nota;
const somarNota = (valorAnterior, valorAtual) => valorAnterior + valorAtual;
const totalDeclarativo = alunos.map(getNota).reduce(somarNota);
const mediaDeclarativo = totalDeclarativo / alunos.length;
console.log(`Método declarativo: ${mediaDeclarativo}`);