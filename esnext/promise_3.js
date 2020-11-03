const { resolve } = require("path")

function gerandoNumero (max, min) {
    if (min > max) [min, max] = [max, min]

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerandoNumero(10, 100)
   .then(valor => valor - 1)
   .then(valorGerado => `O valor gerado é ${valorGerado}`)
   .then(console.log)