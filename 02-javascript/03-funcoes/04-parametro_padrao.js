// Utiliza o operador ou (perigoso, pois 0 será interpretado como falso e cairá no padrão)
function somarComOu (a, b, c)
{
    // Se o valor recebido for "falso", assume o valor 1 como padrão
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
};

console.log('Resultado da soma com ou:', somarComOu(), somarComOu(7), somarComOu(7, 3, 5), somarComOu(0, 0, 0));

// Utiliza verificações (perigoso, pois cada regra deve ser especificada)
function somarComVerificacao (a, b, c)
{
    a = a !== undefined ? a : 1; // Se o valor recebido for "undefined", assume o valor 1 como padrão
    b = 1 in arguments ? b : 1; // Se não houver um segundo valor recebido, assume o valor 1 como padrão
    c = isNaN(c) ? 1 : c; // Se o valor recebido não for um número, assume o valor 1 como padrão

    return a + b + c;
};

console.log('Resultado da soma com verificação:', somarComVerificacao(), somarComVerificacao(7), somarComVerificacao(7, 3, 5), somarComVerificacao(0, 0, 0));

function somarComPadrao (a = 1, b = 1, c = 1)
{
    return a + b + c;
};

console.log('Resultado da soma com padrão:', somarComPadrao(), somarComPadrao(7), somarComPadrao(7, 3, 5), somarComPadrao(0, 0, 0));