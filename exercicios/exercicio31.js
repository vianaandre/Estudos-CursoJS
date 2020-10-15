function imprimindo (vetor) {
    const negativos = []
    const positivos = []

    for (let i in vetor) {
        if (vetor[i] < 0) {
            negativos.push(vetor[i])
        }
        else {
            positivos.push(vetor[i])
        }
    }
    return negativos.length
}

vetor = [1, -3, 2, 9, -2, 7, -9]
console.log(imprimindo(vetor))