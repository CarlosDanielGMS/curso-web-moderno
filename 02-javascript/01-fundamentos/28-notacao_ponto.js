// Acessa o método de arredondamento do objeto Math
console.log('Número arredondado: ' + Math.ceil(7.5));

// Cria atributos
const objeto = {};
objeto.nome = 'Computador';
// objeto['nome'] = 'Monitor'; // Outra forma de declarar um atributo e atribuir um valor a ele dentro de um objeto
console.log('Nome do objeto: ' + objeto.nome);

// Atribui o valor do parâmetro ao atributo interno e cria função interna
function Obj(quantidade)
{
    this.quantidade = quantidade;
    this.exibirMensagem = function()
    {
        console.log('Exibindo mensagem...');
    }
};

const cadeira = new Obj('Cadeira');
console.log(cadeira.quantidade);
cadeira.exibirMensagem();