function Pessoa (nome)
{
    this.nome = nome;
    
    this.apresentar = () => console.log(`Meu nome é ${this.nome}!`);
};

const jl = new Pessoa('João Lucas');
jl.apresentar();