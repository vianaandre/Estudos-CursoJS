// setTimeout(function() {
//     console.log('Está funcioando')

//     setTimeout(function() {
//         console.log('Está funcionado')
//     }, 2000)
// }, 2000)

function sequenciaAlunos(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando...')
            resolve('Funcionado!!!')
        }, tempo)
    })
}

sequenciaAlunos()
   .then(sequenciaAlunos)
   .then(sequenciaAlunos)
   .then(console.log)