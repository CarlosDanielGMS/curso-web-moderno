// Retorna um valor aleatório entre os intervalos informados via parâmetros
function aleatorio({ minimo = 0, maximo = 100 }) // Define limites padrões
{
    const valor = Math.random() * (maximo - minimo) + minimo;
    const resultado = Math.floor(valor);

    return resultado;
};

// Declara o objeto "limites" e atribui valores como mínimo e máximo
const limites = { minimo: 1000, maximo: 100000 };
console.log(aleatorio(limites));

// Atribui somente o valor mínimo
console.log(aleatorio({ minimo: 90}));

// Não atribui nenhum intervalo
console.log(aleatorio({}));

// Exibe um erro, pois a chamada da função requer um objeto (nem que seja vazio)
// console.log(aleatorio());