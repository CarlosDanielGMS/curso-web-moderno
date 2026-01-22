const produto =
{
    nome: 'Processador',
    quantidade: 5,
    preco: 998.90
};

console.log(Object.keys(produto)); // Exibe as chaves/atributos presentes no objeto
console.log(Object.values(produto)); // Exibe os valores dos atributos presentes no objeto
console.log(Object.entries(produto)); // Exibe as "entradas" (pares chave/valor) presentes no objeto

Object.entries(produto).forEach(([atributo, valor]) => // Exibe cada par chave/valor presente no objeto
{
    console.log(`${atributo}: ${valor}`);
});

Object.defineProperty(produto, 'descricao', // Adiciona atributo personalizado ao objeto
    {
        enumerable: true, // Permite a visualização do atributo em funções como 'Object.keys'
        writable: false, // Impede a substituição do valor do atributo
        value: 'Um produto muito massa!' // Define o valor do atributo
    }
);

produto.descricao = 'Esse produto é horrível...'; // Tenta substituir o valor do atributo do objeto, mas não consegue
console.log(produto); // Exibe o objeto

const objetoDestino = { a: 1 };
const objeto1 = { a: 2, b: 3};
const objeto2 = { a: 4, b: 5, c: 6};
const objeto = Object.assign(objetoDestino, objeto2, objeto1); // Concatena ao objeto destino os atributos dos outros objetos
console.log(objeto);