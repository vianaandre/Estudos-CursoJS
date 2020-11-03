const { reject } = require("lodash");
const { rescheduleJob } = require("node-schedule");
const { resolve } = require("path");


// Usando cacth dentro da chamada 
function erroOunão (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }
        else {
            resolve(valor)
        }
    })
}

erroOunão('TesteUM', 0.4)
    .then(v => `valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`erro: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(console.log('Fimmmmm'))


// Usando catch dentro do escopo da função 
function erroOunãoDois (valor, valorErro) {
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < valorErro){
                reject('Ocorreu Um erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

erroOunãoDois('TesteUM', 0.4)
    .then(v => `valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`erro: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(console.log('Fimmmmm'))
