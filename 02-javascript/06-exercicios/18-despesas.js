const exibir = mensagem => console.log(mensagem);
function calcularDespesas (compras)
{
    let despesas = compras.map(compra => compra.preco);
    return totalDespesas = despesas.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);
};

exibir(calcularDespesas([{ nome: "Jornal online", categoria: "Informação", preco: 89.99 }, { nome: "Cinema", categoria: "Entretenimento", preco: 150 }]));
exibir(calcularDespesas([{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 }, { nome: "MacBook Pro", categoria: "Eletrônicos", preco: 30999.90 }]));