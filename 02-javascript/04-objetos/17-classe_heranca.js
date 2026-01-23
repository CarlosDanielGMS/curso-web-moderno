class Avo
{
    constructor (sobrenome)
    {
        this.sobrenome = sobrenome;
    };
};

class Pai extends Avo // Estabelece uma relação de herança entre as classes 'Pai' (como sendo o filho) e 'Avo' (como sendo o pai)
{
    constructor (sobrenome, profissao = "Engenheiro de Software")
    {
        super(sobrenome);
        this.profissao = profissao;
    };
};

class Filho extends Pai // Estabelece uma relação de herança entre as classes 'Filho' (como sendo o filho) e 'Pai' (como sendo o pai)
{
    constructor ()
    {
        super('Galvão');
    };
};

const daniel = new Filho();
console.log(daniel);