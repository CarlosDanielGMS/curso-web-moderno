// Define a porta do servidor
const porta = 3003;

// Importa o módulo responsável pela criação do servidor
const express = require('express');

// Instancia a aplicação
const aplicacao = express();

// Importa o módulo responsável pela análise sintática (converter o corpo das requisições em objeto)
const bodyParser = require('body-parser');

// Importa o módulo responsável pelo gerenciamento do banco de dados
const bancoDados = require('./banco_dados');

// Obriga todas as requisições a passarem pela análise sintática
aplicacao.use(bodyParser.urlencoded({ extended: true }));

// Cria uma rota para buscar os produtos registrados
aplicacao.get
(
    '/produtos', // Define o nome da rota
    (requisicao, resposta, proximo) => // Define a função middleware da rota
    {
        resposta.send(bancoDados.getProdutos()) // Envia uma resposta para o servidor
    }
);

// Cria uma rota para buscar o produto de acordo com o ID passado como parâmetro
aplicacao.get
(
    '/produtos/:id', // Define o nome da rota
    (requisicao, resposta, proximo) => // Define a função middleware da rota
    {
        resposta.send(bancoDados.getProduto(requisicao.params.id)); // Envia uma resposta para o servidor
    }
);

// Cria uma rota para registrar o produto passado como parâmetro
aplicacao.post
(
    '/produtos', // Define o nome da rota
    (requisicao, resposta, proximo) => // Define a função middleware da rota
    {
        const produto = bancoDados.salvarProduto // Salva o produto no banco de dados
        (
            {
                nome: requisicao.body.nome,
                preco: requisicao.body.preco
            }
        );
        resposta.send(produto); // Envia uma resposta para o servidor
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