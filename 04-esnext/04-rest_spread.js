// Os operadores rest(juntar)/spread(espalhar) permitem uma maior flexibilização do código

// O operador rest possibilita a utilização de parâmetros não declarados na função
function somar (...valores)
{
    let resultado = 0;
    valores.forEach(valor => resultado += valor);
    return resultado;
};
console.log(somar(1, 2, 3, 4));

// O operador spread possibilita incorporar atributos...
// De um objeto
const funcionario =
{
    nome: 'Maria',
    salario: 12345.67
}
const cloneFuncionario =
{
    ...funcionario,
    ativo: true
};
console.log(cloneFuncionario);

// De um vetor
const primeiroGrupo = ['João', 'Nícolas', 'Carlos'];
const ultimoGrupo = ['Maria', ...primeiroGrupo, 'Pedro'];
console.log(ultimoGrupo);