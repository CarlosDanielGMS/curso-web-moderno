// Funções arrow respeitam o contexto léxico
function Produto()
{
    this.quantidade = 0;

    setInterval(() => {
        this.quantidade++;
        console.log(this.quantidade);
    }, 1000);
};

new Produto;