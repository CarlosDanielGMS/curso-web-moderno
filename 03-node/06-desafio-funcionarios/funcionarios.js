const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const buscarChineses = funcionario => funcionario.pais === 'China';
const buscarMulheres = funcionario => funcionario.genero === 'F';
const buscarMenorSalario = (funcionarioAnterior, funcionarioAtual) => funcionarioAnterior.salario < funcionarioAtual.salario ? funcionarioAnterior : funcionarioAtual;

axios.get(url).then
(
    response =>
    {
        const funcionarios = response.data;
        const menorSalarioFemininoChines = funcionarios.filter(buscarChineses).filter(buscarMulheres).reduce(buscarMenorSalario);
        console.log(menorSalarioFemininoChines);
    }
);