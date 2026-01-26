const exibir = mensagem => console.log(mensagem);
const calcularSalario = (horasTrabalhadas, valorHora) => `Salário igual a R$ ${horasTrabalhadas * valorHora}`;

exibir(calcularSalario(150, 40.5));