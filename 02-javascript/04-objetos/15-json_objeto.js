const objeto =
{
    a: 1,
    b: 2,
    c: 3.5,
    d: true,
    e: "string",
    f: [],
    g: {},
    somar ()
    {
        return a + b + c;
    }
};
console.log(JSON.stringify(objeto)); // Transforma o objeto em uma string JSON (funções não fazem parte)

const json = '{ "a": 1, "b": 2, "c": 3.5, "d": true, "e": "string", "f": [], "g": {} }';
console.log(JSON.parse(json)); // Transforma a string JSON em um objeto