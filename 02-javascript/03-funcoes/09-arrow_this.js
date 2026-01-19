// Implementação do this com função normal
let compararComThis = function (parametro)
{
    console.log(this === parametro);
}

compararComThis(global);

// Implementação do this com bind
const objeto = {};
compararComThis = compararComThis.bind(objeto);
compararComThis(global);
compararComThis(objeto);

// Implementação do this com função arrow
let compararComThisArrow = parametro => console.log(this === parametro);
compararComThisArrow(global);

// Implementação do this com bind
compararComThisArrow = compararComThisArrow.bind(objeto);
compararComThis(objeto);