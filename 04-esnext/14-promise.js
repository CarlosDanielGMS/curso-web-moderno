// Em JavaScript, uma Promise é uma promessa de que algo vai ser executado e de que haverá um retorno no futuro

// Declara as funções a serem utilizadas no retorno da promessa
const obterPrimeiroElemento = vetor => vetor[0];
const obterPrimeiraLetra = texto => texto[0];
const transformarEmMinuscula = letra => letra.toLowerCase();
const exibir = mensagem => console.log(mensagem);

// Instancia uma nova promessa
let promessa = new Promise
(
    function (resolver, rejeitar) // Passa como parâmetro uma função que vai fazer algo e, de acordo com o resultado, chamar as funções que recebeu como parâmetro
    {
        resolver(['Carlos', 'Daniel']); // Invoca a função passada como parâmetro para fazer algo caso o processo tenha sido executado corretamente
    }
);

// Acessa o retorno da promessa
promessa.then(obterPrimeiroElemento) // Passa uma função como parâmetro, que recebe como parâmetro o valor passado como parâmetro no cumprimento da promessa ( ['Carlos', 'Daniel'] )
        .then(obterPrimeiraLetra) // Passa uma função como parâmetro, que recebe como parâmetro o valor retornado pela função passada como parâmetro no 'then' anterior ( 'Carlos' )
        .then(transformarEmMinuscula) // Passa uma função como parâmetro, que recebe como parâmetro o valor retornado pela função passada como parâmetro no 'then' anterior ( 'C' )
        .then(exibir); // Passa uma função como parâmetro, que recebe como parâmetro o valor retornado pela função passada como parâmetro no 'then' anterior ( 'c' )