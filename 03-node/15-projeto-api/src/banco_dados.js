// Gerencia os IDs dos produtos registrados
const sequencia =
{
    _id: 1,
    get id () { return this._id++ }
};

// Cria o vetor de objetos que contém os produtos registrados
const produtos = [];

// Registra o produto passado como parâmetro
function salvarProduto (produto)
{
    if (!produto.id) produto.id = sequencia.id;
    produtos[produto.id] = produto;
    return produto;
};

// Retorna o produto de acordo com o ID passado como parâmetro
function getProduto (id)
{
    return produtos[id] || {};
};

// Retorna os produtos registrados
function getProdutos ()
{
    return Object.values(produtos);
};

// Exclui o produto de acordo com o ID passado como parâmetro
function excluirProduto (id)
{
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

// Exporta as funções
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };