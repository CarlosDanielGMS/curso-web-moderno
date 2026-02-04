// Importa os módulos utilizados
const express = require('express');
const bodyParser = require('body-parser');

// Instancia a aplicação
const aplicacao = express();

// Obriga todas as requisições a passarem pela análise sintática
aplicacao.use(bodyParser.urlencoded({ extended: true }));

// Cria uma rota para registrar o usuário passado como parâmetro
aplicacao.post
(
    '/usuarios',
    (requisicao, resposta, proximo) =>
    {
        console.log(requisicao.body);
        resposta.send('<h1>PARABÉNS!!!</h1>');
    }
);

// Inicia o servidor
aplicacao.listen(3000);