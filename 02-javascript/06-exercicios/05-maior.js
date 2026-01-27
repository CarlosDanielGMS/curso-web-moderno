const exibir = mensagem => console.log(mensagem);
const maiorIgual = (primeiroNumero, segundoNumero) => primeiroNumero === segundoNumero || primeiroNumero > segundoNumero;

exibir(maiorIgual(0, 0));
exibir(maiorIgual(0, "0"));
exibir(maiorIgual(5, 1));