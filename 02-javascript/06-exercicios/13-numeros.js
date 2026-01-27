const exibir = mensagem => console.log(mensagem);
function filtrarNumeros (vetor)
{
    return vetor.filter(elemento => typeof elemento === "number");
};

exibir(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]));
exibir(filtrarNumeros(["a", "c"]));