// fs.readFile(caminho, 'utf-8', (error, conteúdo) => {
//     const config = JSON.parse(conteúdo) // precisei transformar em objeto o arquivo.json
//     console.log(`${config.db.host}: ${config.db.port}`)
// })
// const caminho = __dirname + '/arquivo.json'

const fs = require('fs')
const { resolve } = require('path')

function lendoArquivo(arquivo) {
    return new Promise(resolve => {
        const lendo = fs.readFile(caminho, 'utf-8', (error, conteúdo) => {
            resolve(conteúdo.toString())// Transformar em um String 
        })
        console.log('Executando...')
    })
    
}

const transformandoEmObjeto = valor => JSON.parse(valor)
const caminho = __dirname + '/dados.txt'

lendoArquivo(caminho)
   .then(num => num.split('\n'))
   .then(numeros => numeros.join(''))
   .then(console.log)
//    .then(numerosMais => `${numerosMais + 1}`)
//    .then(console.log)// não daria certo 