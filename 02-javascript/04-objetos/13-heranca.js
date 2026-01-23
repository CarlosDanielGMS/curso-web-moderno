function Aula (id, nome)
{
    this.id = id;
    this.nome = nome;
};

const aula1 = new Aula(123, 'Aula 1');
const aula2 = new Aula(987, 'Aula 2');
console.log(aula1, aula2);

// Implementação do 'new'
function novo (funcao, ...parametros) // ...parametros permite a passagem de inúmeros argumentos
{
    const objeto = {}; // Cria um objeto vazio
    objeto.__proto__ = funcao.prototype; // Atribui o protótipo da função passada como parâmetro ao protótipo do objeto
    funcao.apply(objeto, parametros); // Invoca a função passando o objeto e os parâmetro
    return objeto; // Retorna o objeto completo
}

const aula3 = novo(Aula, 123, 'Aula 1');
const aula4 = novo(Aula, 987, 'Aula 2');
console.log(aula3, aula4);