// sistema de notas de uma instituição

/*
 * sistema que pega as notas e delimita maiores que 38 e menores que 38 
 * sistema que pega os multiplos de 5 
 * sistema que arrendonda para os multiplos de 5 
 */

function SistemadeNotas (notas) { // Sistema que pega e delimita maiores que 38 e menores que 38
    const Vereficação = arrendondamento(notas)
    if (Vereficação >= 40) {
        console.log(`Nota: ${Vereficação}`)
    }
    else if (Vereficação < 38) {
        console.log(`Nota: ${notas}`)
    }
} 

function arrendondamento (notas) {
    if (notas % 5 > 2) { // sistema que pega os multiplos de 5 
        return notas + (5 - (notas % 5)) // sistema que arrendodanda para 5 
    }
    else {
        return notas
    }
}

SistemadeNotas(38)
SistemadeNotas(44)
SistemadeNotas(70)
SistemadeNotas(33)
