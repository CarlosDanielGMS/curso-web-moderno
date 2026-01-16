function Pessoa ()
{
    this.idade = 0;

    const self = this; // "Burla" o contexto associando-o à constante

    setInterval(() => {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000); // Alternativa para "burlar" o contexto associando-o à constante
};

new Pessoa;