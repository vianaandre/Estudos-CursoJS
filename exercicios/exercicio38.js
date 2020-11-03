const { ceil } = require("lodash")

function imprimaImpares (min, max) {
    if (min > max) [min, max] = [max, min]
    const valorAleatorio =  Math.random() * (max - min) + min
    const arrendodando = ceil(valorAleatorio)

    const vereficador = arrendodando % 2

    if(vereficador != 0) {
        console.log(`
        Numero Impar ${arrendodando}
        `)
    }else {
        console.error(`
        Numero Invalido para Impar ${arrendodando}
        `)
    }
}

imprimaImpares(0, 100)

