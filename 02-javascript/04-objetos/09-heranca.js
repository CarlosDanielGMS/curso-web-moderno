// Prototype chain = cadeia de protótipos
Object.prototype.atributo0 = 'Z0'; // Má prática

const avo =
{
    atributo1: 'A1'
};

const pai =
{
    __proto__: avo, // Herda do objeto 'avo', referenciando-o como o seu protótipo
    atributo2: 'B2',
    atributo3: 'D4'
};

const filho =
{
    __proto__: pai, // Herda do objeto 'pai', referenciando-o como o seu protótipo
    atributo3: 'C3'
};

console.log(filho.atributo0); // Atributo 0 não existe no objeto-filho, mas foi acessado por meio do pai, que acessou o avô, que acessou o 'Object.prototype'
console.log(filho.atributo1); // Atributo 1 não existe no objeto-filho, mas foi acessado por meio do pai, que acessou o avô
console.log(filho.atributo2); // Atributo 2 não existe no objeto-filho, mas foi acessado por meio do pai
console.log(filho.atributo3); // Atributo 3 existe no objeto-filho e foi acessado por meio dele mesmo (acessa sempre o primeiro que encontra)

// Exemplo mais complexo
const carro =
{
    velocidadeAtual: 0,
    velocidadeMaxima: 180,
    acelerar (delta)
    {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima)
        {
            this.velocidadeAtual += delta;
        }
        else
        {
            this.velocidadeAtual = this.velocidadeMaxima;
        };
    },
    exibirStatus ()
    {
        return `${this.velocidadeAtual} km/h de ${this.velocidadeMaxima} km/h`;
    }
};

const honda =
{
    modelo: 'Civic',
    velocidadeMaxima: 400 // Shadowing = sobreposição do atributo do objeto-pai pelo atributo do objeto-filho
};

const volkswagen =
{
    modelo: 'Fusca',
    exibirStatus ()
    {
        return `${this.modelo}: ${super.exibirStatus()}` // Invoca a função do objeto-pai por meio do shadowing
    }
};

Object.setPrototypeOf(honda, carro) // Estabelece uma relação de herança entre os objetos 'honda' (como sendo o filho) e 'carro' (como sendo o pai)
Object.setPrototypeOf(volkswagen, carro) // Estabelece uma relação de herança entre os objetos 'volkswagen' (como sendo o filho) e 'carro' (como sendo o pai)

console.log(honda);
console.log(volkswagen);

volkswagen.acelerar(200); // Função acelerar não existe no objeto-filho, mas foi acessado por meio do pai
console.log(volkswagen.exibirStatus()); // Função exibir status existe no objeto-filho e foi acessado por meio dele mesmo (acessa sempre o primeiro que encontra)

honda.acelerar(100); // Função acelerar não existe no objeto-filho, mas foi acessado por meio do pai
console.log(honda.exibirStatus()); // Função exibir status não existe no objeto-filho, mas foi acessado por meio do pai