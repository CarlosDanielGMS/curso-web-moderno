class Lancamento
{
    constructor (nome = 'Anônimo', valor = 0)
    {
        this.nome = nome;
        this.valor = valor;
    };
};

class CicloFinanceiro
{
    constructor (mes, ano)
    {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    };

    adicionarLancamentos (...lancamentos)
    {
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento));
    };

    consolidarLancamentos ()
    {
        let valorConsolidado = 0;
        this.lancamentos.forEach(lancamento => valorConsolidado += lancamento.valor);
        return valorConsolidado;
    };
};

const contas = new CicloFinanceiro(1, 2026);

const salario = new Lancamento('Salário', 5700);
const contaLuz = new Lancamento('Conta de Energia', -300);
const jogos = new Lancamento('Jogos da Steam', -400);

contas.adicionarLancamentos(salario, contaLuz, jogos);
console.log(`Saldo: R$ ${contas.consolidarLancamentos()}`);