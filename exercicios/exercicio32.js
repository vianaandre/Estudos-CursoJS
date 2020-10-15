// algoritmo que dá a média aritmética de um vetor de numeros inteiros

function médiaAritmética (vetorInteiros) {
    let soma = 0

    for (let i=0; i<vetorInteiros.length; i++) {
        soma += vetorInteiros[i]
    }

    const recebe = soma / vetorInteiros.length
    return `${recebe.toFixed(2)}`
}

vetorInteiros = [23, 6, 2, 8, 2, 8, 90]
console.log(médiaAritmética(vetorInteiros))