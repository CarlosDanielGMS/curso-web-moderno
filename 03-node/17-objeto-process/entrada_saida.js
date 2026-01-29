// Declara a constante anônimo
// Atribui a ela o valor verdadeiro se o usuário TIVER passado o parâmetro 'a'
// Atribui a ela o valor falso se o usuário NÃO TIVER passado o parâmetro 'a'
const isAnonimo = process.argv.indexOf('-a') !== -1;

// Exibe o valor da constante anônimo
// console.log(isAnonimo);

if (isAnonimo) // Verifica se o valor da constante anônimo é verdadeiro
{
    process.stdout.write('Olá, anônimo!\n'); // Exibe uma mensagem no terminal
    process.exit(); // Encerra o processo
}
else // Caso contrário, verifica se o valor da constante anônimo é falso
{
    process.stdout.write('Por gentileza, informe o seu nome: '); // Exibe uma mensagem no terminal
    process.stdin.on // Monitora a entrada de dados
    (
        'data', // Evento disparado quando há novos dados no buffer
        informacao => // Define a função de callback que recebe os dados
        {
            const nome = informacao.toString().trim(); // Armazena a string na constante, limpando as quebras de linhas
            process.stdout.write(`A paz de Deus, ${nome}!!!`); // Exibe uma mensagem no terminal
            process.exit(); // Encerra o processo
        }
    );
};