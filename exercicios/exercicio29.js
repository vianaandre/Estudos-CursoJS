

function imprimindo (vetor) {
    const intervalo = []
    const foraIntervalo = []

    for (let i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            intervalo.push(i)
        }else {
            foraIntervalo.push(i)
        }
    }
    console.log(`
    Dentro do intervalo: ${intervalo.length}
    Fora do intervalo: ${foraIntervalo.length}
    `)
}

vetor = [1, 4, 7, 10, 12, 15, 16, 20, 22, 70, 90, 100]

imprimindo(vetor)