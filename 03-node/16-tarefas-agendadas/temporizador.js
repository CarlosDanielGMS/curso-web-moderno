// Importa o módulo responsável pelo agendamento de tarefas temporizadas
const nodeSchedule = require('node-schedule');

// Define o que a primeira tarefa deve fazer e em que momento
const primeiraTarefa = nodeSchedule.scheduleJob
(
    '*/5 * 10 * * 4', // Executa a tarefa a cada 5 segundos apenas durante as 10 horas da quinta-feira
    function ()
    {
        console.log(`Executando a primeira tarefa! Horário: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
    }
);

// Cancela a primeira tarefa após 30 segundos
setTimeout
(
    () =>
    {
        console.log('Cancelando a primeira tarefa...');
        primeiraTarefa.cancel();
    },
    30000
);

// Define uma regra para a execução da segunda tarefa
const regra = new nodeSchedule.RecurrenceRule(); // Instancia a regra
regra.dayOfWeek = [new nodeSchedule.Range(3, 5)]; // Determina os dias de execução (neste caso, de quarta-feira a sexta-feira)
regra.hour = 10; // Determina a hora de execução
regra.second = 15; // Determina o segundo da execução

// Define o que a segunda tarefa deve fazer e em que momento
const segundaTarefa = nodeSchedule.scheduleJob
(
    regra, // Define a regra de execução
    () =>
    {
        console.log(`Executando a segunda tarefa! Horário: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
    }
);