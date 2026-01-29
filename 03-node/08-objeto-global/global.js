// Node.js possui ambientes globais, que qualquer arquivo tem acesso
// No navegador é o 'window', na máquina é 'global'

// Exibe as informações do ambiente/objeto
// console.log(global);

// Adiciona um atributo ao objeto
global.aplicacao = Object.freeze // Object.freeze impede o objeto de ser alterado, boa prática
(
    {
        nome: 'Sistema Personalizado',
        dizer() { return 'Estou em todos os lugares!' }
    }
);