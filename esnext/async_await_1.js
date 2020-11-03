const { resolve } = require("path");
// O async await tem a função de transformar um função assíncrona em Síncrona 

function esperandoExecutar (tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}


// pegandoValor(2000)
//     .then(console.log(`Imprimindo`))
//     .then(pegandoValor(2000))
//     .then(console.log(`Imprimindo`))
//     .then(pegandoValor(3000))
//     .then(console.log(`Imprimindo`))
//     .then(pegandoValor(2000))
//     .then(console.log(`Imprimindo`))

async function passandoDeFormaSync() {
    await esperandoExecutar(2000)
    console.log('Imprimindo...')

    await esperandoExecutar(2000)
    console.log('Imprimindo...')

    await esperandoExecutar(2000)
    console.log('Imprimindo...')
}

passandoDeFormaSync()

function FuncdeValor (tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, tempo)
    })
}

async function valorMaisTanto() {
    let valor = await FuncdeValor()

    await FuncdeValor()
    console.log(`Valor: ${valor}`)

    await FuncdeValor()
    console.log(`Valor: ${valor + 1}`)

    await FuncdeValor() 
    console.log(`Valor: ${valor + 2}`)
} 

valorMaisTanto()