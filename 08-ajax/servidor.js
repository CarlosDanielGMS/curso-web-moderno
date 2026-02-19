const express = require('express'); // Importa o módulo responsável pela criação do servidor
const bodyParser = require('body-parser'); // Importa o módulo responsável por converter o corpo das requisições em objeto
const multer = require('multer'); // Importa o módulo responsável por realizar o carregamento de arquivos

const aplicacao = express(); // Instancia a aplicação
const armazenamento = multer.diskStorage // Instancia a configuração de armazenamento de arquivos
(
    { // Instancia o objeto passado como parâmetro da função 'diskStorage'
        destination: function (requisicao, arquivo, funcao) // Define o destino do arquivo
        {
            funcao(null, './carregamento'); // Invoca a função passada como parâmetro informando o erro e o diretório onde o arquivo deve ser carregado
        },

        filename: function (requisicao, arquivo, funcao) // Define o nome do arquivo
        {
            funcao(null, `${Date.now()}_${arquivo.originalname}`); // Invoca a função passada como parâmetro informando o erro e o nome do arquivo ao ser carregado
        }
    }
);
const carregar = multer({ storage: armazenamento }).single('arquivo'); // Instancia a função de carregamento de arquivos passando como parâmetro a configuração de armazenamento e definindo o nome do arquivo

aplicacao.use(express.static('.')); // Disponibiliza todos os arquivos estáticos presentes no diretório
aplicacao.use(bodyParser.urlencoded({ extended: true })); // Converte em objeto todas as informações contidas em formulários recebidas por requisição
aplicacao.use(bodyParser.json()); // Converte em objeto todas as informações no formato JSON recebidas por requisição

aplicacao.post // Cria uma rota para carregar arquivo
(
    '/carregar', // Define o nome da rota
    (requisicao, resposta) => // Instancia a função a ser executada ao acessar a rota
    {
        carregar // Invoca a função de carregar arquivo
        (
            requisicao, resposta, erro => // Invoca a função a ser executada após tentar carregar o arquivo
            {
                if (erro) // Verifica se houve erro
                {
                    return resposta.end('Ocorreu um erro ao carregar o arquivo.'); // Exibe uma mensagem de erro e interrompe a função
                }

                resposta.end('Arquivo carregado com sucesso!'); // Exibe uma mensagem de sucesso
            }
        );
    }
);

aplicacao.post // Cria uma rota para enviar o formulário
(
    '/formulario', // Define o nome da rota
    (requisicao, resposta) => // Instancia a função a ser executada ao acessar a rota
    {
        resposta.send // Envia uma resposta
        (
            { // Cria um objeto
                ...requisicao.body, // Adiciona todos os atributos presente no corpo da requisição ao objeto
            }
        );
    }
);

aplicacao.get // Cria uma rota para verificar se um número é par ou ímpar
(
    '/parImpar', // Define o nome da rota
    (requisicao, resposta) => // Executa uma função ao acessar a rota passando a requisição e a resposta como parâmetros
    {
        // FORMAS DE RECEBER PARÂMETROS VIA REQUISIÇÃO
        // requisicao.body - Valores presentes no corpo da requisição, exemplo: { "numero": "5" }
        // requisicao.query - Valores presentes no endereço da requisição usando '?', exemplo: localhost:8080/parImpar?numero=7
        // requisicao.params - Valores presentes no endereço da requisição usando '/', exemplo: localhost:8080/parImpar/5
        const isPar = parseInt(requisicao.query.numero) % 2 === 0;
        resposta.send // Envia uma resposta
        (
            { // Cria um objeto
                resultado: isPar ? 'par' : 'ímpar' // Adiciona o resultado da verificação ao objeto
            }
        );
    }
);

aplicacao.listen(8080, () => console.log('Executando...')); // Inicia o servidor e exibe uma mensagem logo após a execução