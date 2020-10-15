const schedule = require('node-schedule')

// método usado da bilioteca do node-schedule 
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', () => { //secondos-min-hora-diames-mesano-diasemana
    console.log('Temporizador Funcionando!', new Date().getSeconds())
})

// método proprio do javasciptd vindo das funções 
setTimeout(function () {
    tarefa1.cancel() // função para cancelar o primeiro método
    console.log('Tarefa1 Parada!')
}, 20000)
//setImmediate
//setInterval


// regras para criar um temporizados - como fazelas 
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 10

// executando com as regras 
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa 2 em Execução', new Date().getSeconds())
})