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

aplicacao.listen(8080, () => console.log('Executando...')); // Inicia o servidor e exibe uma mensagem logo após a execução