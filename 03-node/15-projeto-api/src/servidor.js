// Define a porta do servidor
const porta = 3003;

// Importa o módulo responsável pela criação do servidor
const express = require('express');

// Instancia a aplicação
const aplicacao = express();

// Cria uma rota
aplicacao.get
(
    '/produtos', // Define o nome da rota
    (requisicao, resposta, proximo) => // Define a função middleware da rota
    {
        resposta.send // Envia uma resposta para o servidor
        (
            { // A resposta contém um objeto que será convertido para o formato JSON
                nome: 'Notebook',
                preco: 123.45
            }
        );
    }
);

// Inicia o servidor
aplicacao.listen
(
    porta, // Utiliza a porta definida anteriormente
    () => // Executa uma função assim que o servidor é iniciado
    {
        console.log(`O servidor está executando na porta ${porta}...`); // Exibe uma mensagem no terminal
    }
);