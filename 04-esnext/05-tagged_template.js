// Tagged Templates permitem processar Template Strings dentro de uma função
function processar (partes, ...valores)
{
    console.log(partes); // Partes = vetor com as parte do Template String
    console.log(valores); // Valores = vetor com os valores do Template String
    return 'Outra string...'
};

const pessoa = 'Daniel';
const atributo = 'Gostoso';
console.log(processar `${pessoa} é ${atributo}`);