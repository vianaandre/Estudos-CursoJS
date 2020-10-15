// ler um vetor de numeros inteiros e imprimir os que são pares e os que são impáres

// criar uma função que vai pegar que vai imprimir indicador por indicador até chegar no ultimo 
// dai essa função ira pegar cada indicador e irar tratar ele dentro de um if else 


const numeros = [2, 5, 7, 8, 10, 11, 14, 17, 19, 22, 44]

 function imprimindo() {

    const recebendoPAR = []
    const recebendoIMPAR = []

    for (let i in numeros) {
        const divisão = [i] % 2
        if (divisão == 0) {
            recebendoPAR.push(i)
        }else if (divisão != 0) {
            recebendoIMPAR.push(i)
        }
    }

    console.log(`
    PARES: ${recebendoPAR.length}
    IMPARES: ${recebendoIMPAR.length}
    `)
}

imprimindo()

