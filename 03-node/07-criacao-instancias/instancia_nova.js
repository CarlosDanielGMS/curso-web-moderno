// Uma função factory retorna um novo objeto sempre que é invocada
module.exports = () =>
{
    return { valor:0, incrementar () { this.valor++; } };
};