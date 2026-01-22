const atributo1 = 'Daniel';
const atributo2 = 'Lano';
const atributo3 = 'João';

// Anteriormente, ao criar objetos, sempre era preciso descrever o nome do atributo interno seguidos dos dois pontos e o nome do atributo externo
const objeto1 =
{
    atributo1: atributo1,
    atributo2: atributo2,
    atributo3: atributo3
};

// Agora, se os nomes dos atributos forem os mesmos, basta digitá-los uma única vez
const objeto2 = { atributo1, atributo2, atributo3 };

console.log(objeto1, objeto2); // Compara ambos os objetos

// Criando atributos com nomenclaturas dinâmicas
const nomeAtributo = 'valor';
const valorAtributo = 998.90;

const objeto3 = {};
objeto3[nomeAtributo] = valorAtributo;
console.log(objeto3);

const objeto4 =
{
    [nomeAtributo]: valorAtributo
};
console.log(objeto4);

// Formas de criar funções em objetos
const objeto5 =
{
    // Forma tradicional
    funcao1: function () // Ou "funcao1: () =>"
    {
        // ...
    },

    // Forma simplificada
    funcao2()
    {
        // ...
    }
}
console.log(objeto5);