// Retorna um valor aleatório entre os intervalos informados via parâmetros
function aleatorio([ minimo = 0, maximo = 100 ]) // Define limites padrões
{
    if (minimo > maximo) [minimo, maximo] = [maximo, minimo];

    const valor = Math.random() * (maximo - minimo) + minimo;
    const resultado = Math.floor(valor);

    return resultado;
};

// Atribui o valor mínimo e máximo do limite
console.log(aleatorio([0, 1000]));

// Atribui somente o valor mínimo
console.log(aleatorio([90]));

// Atribui somente o valor máximo
console.log(aleatorio([, 10]));

// Não atribui nenhum valor
console.log(aleatorio([]));

// Exibe um erro, pois a chamada da função requer um vetor (nem que seja vazio)
// console.log(aleatorio());