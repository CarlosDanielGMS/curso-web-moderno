function comprarProduto (codigo, quantidade)
{
    let pedido = {};

    switch (codigo)
    {
        case 100:
            pedido.produto = 'Cachorro Quente';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 3}`;
            break;
        case 200:
            pedido.produto = 'Hambúrguer Simples';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 4}`;
            break;
        case 300:
            pedido.produto = 'Cheeseburguer';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 5.5}`;
            break;
        case 400:
            pedido.produto = 'Bauru';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 7.5}`;
            break;
        case 500:
            pedido.produto = 'Refrigerante';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 3.5}`;
            break;
        case 600:
            pedido.produto = 'Suco';
            pedido.quantidade = quantidade;
            pedido.valorTotal = `R$ ${quantidade * 2.8}`;
            break;
        default:
            pedido.alerta = 'Produto inexistente.';
            break;
    };

    console.log(pedido);
};

comprarProduto(100, 7);
comprarProduto(200, 3);
comprarProduto(300, 2);
comprarProduto(400, 4);
comprarProduto(500, 2);
comprarProduto(600, 5);
comprarProduto(700, 7);