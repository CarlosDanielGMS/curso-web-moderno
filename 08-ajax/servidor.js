const express = require('express'); // Importa o módulo responsável pela criação do servidor
const bodyParser = require('body-parser'); // Importa o módulo responsável por converter o corpo das requisições em objeto

const aplicacao = express(); // Instancia a aplicação

aplicacao.use(express.static('.')); // Disponibiliza todos os arquivos estáticos presentes no diretório
aplicacao.use(bodyParser.urlencoded({ extended: true })); // Converte em objeto todas as informações contidas em formulários recebidas por requisição
aplicacao.use(bodyParser.json()); // Converte em objeto todas as informações no formato JSON recebidas por requisição

aplicacao.get('/teste', (requisicao, resposta) => resposta.send('Ok')); // Cria uma rota para testar o funcionamento que retorna uma mensagem

aplicacao.listen(8080, () => console.log('Executando...')); // Inicia o servidor e exibe uma mensagem logo após a execução