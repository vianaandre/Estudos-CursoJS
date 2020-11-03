const { join } = require("path")

// ES8: values e entries 
const obj = {a: 12, b: 13, c: 14}
console.log(Object.values(obj))
console.log(Object.entries(obj))
const transforma = Object.entries(obj)
const transformaCompleto = transforma.join(' ')
console.log(transformaCompleto)

// Melhorias na Notação literal de objetos 
const nome = 'André'

const objeto = {
    nome, 
    ola() {
        return 'Oi'
    }
}

console.log(objeto.ola(), objeto.nome)

// class
// como colocar uma class como herança da outra 
class cachorro {}
class falar extends cachorro {
    fala() {
        return 'AU AU'
    }
}

console.log(new falar().fala())

class teste {
    constructor(num) {
        this.num = num 
    }
    somar () {
        const recebendo = this.num.filter(e => e > 5)
        return recebendo
    }
}
const num = [2, 5, 7, 9, 2, 8, 10]
console.log(new teste(num).somar())