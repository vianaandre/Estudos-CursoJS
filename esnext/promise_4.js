function gerandoNumero (max, min, tempo) {
    if (min > max) [min, max] = [max, min]

    return new Promise(resolve => {

        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        
    })
}

function gerarNumeroTempo () {
    return Promise.all([// O método do all tem a função de executar varias promise simultaniamente
        gerandoNumero(1, 200, 2000), 
        gerandoNumero(200, 300, 200), 
        gerandoNumero(1, 200, 3000),
        gerandoNumero(1, 200, 4000)
    ])
}

console.time('Tempo de execução')

gerarNumeroTempo()
    .then(numero => console.log(numero))
    .then(() => console.timeEnd('Tempo de execução'))
