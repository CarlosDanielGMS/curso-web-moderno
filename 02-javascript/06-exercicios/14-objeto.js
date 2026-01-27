const exibir = mensagem => console.log(mensagem);
function transformar (objeto)
{
    return Object.entries(objeto);
};

exibir(transformar({ nome: "Maria", profissao: "Desenvolvedora de software" }));
exibir(transformar({ codigo: 11111, preco: 12000 }));