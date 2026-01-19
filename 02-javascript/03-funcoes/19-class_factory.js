class Pessoa {
    constructor(nome) {
        this.nome = nome;
    };

    apresentar ()
    {
        console.log(`Meu nome é ${this.nome}!`);
    };
};

const jl = new Pessoa('João Lucas');
jl.apresentar();

const criarPessoa = nome =>
{
    return {
        apresentar: () => console.log(`Meu nome é ${nome}!`)
    };
};

const eg = criarPessoa('Estela Galvão');
eg.apresentar();