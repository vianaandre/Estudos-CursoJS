// uma algoritmo que lê o código e a nota de um aluno e imprimi a média poldera, se ele passou ou não e as suas notas

/**
 * algoritmo que lê o código de um aluno e suas três notas *
 * mostrar o código do aluno e suas três notas
 * Média polderada: Peso maior da nota é 4, e os dois menores são 3 
 * mostrar média polderada 
 * Aprovado >= 5 - Reprovado < 5 
 * mostrar de esta aprovado ou reprovado 
 */

function códigoeNotas(código, nota1, nota2, nota3) {
    this.C1 = código

    this.N1 = nota1
    this.N2 = nota2
    this.N3 = nota3

    this.vereficando = function () {
        let multiplicando = 0
        if (this.N1 > this.N2 && this.N1 > this.N3) {
            multiplicando = ((this.N1 * 4) + (this.N2 * 3) + (this.N3 * 3)) / (this.N1 + this.N2 + this.N3)
        }
        else if (this.N2 > this.N1 && this.N2 > this.N3) {
            multiplicando = ((this.N2 * 4) + (this.N1 * 3) + (this.N3 * 3)) / (this.N1 + this.N2 + this.N3)
        }
        else if (this.N3 > this.N1 && this.N3 > this.N2) {
            multiplicando = ((this.N3 * 4) + (this.N2 * 3) + (this.N1 * 3)) / (this.N1 + this.N2 + this.N3)
        }
        this.Vereficado = multiplicando
        return `${this.Vereficado.toFixed(2)}`
    }
    this.aprovadoouReprovado = function () {
        if (this.Vereficado >= 5) {
            return `Aprovado`
        }
        else if (this.Vereficado < 5) {
            return `Reprovado`
        } 
    }

    return `
    Código: ${código}
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Média Poldera: ${this.vereficando()}
    ${this.aprovadoouReprovado()}
    `

}

console.log(códigoeNotas(10, 10, 4, 6))






