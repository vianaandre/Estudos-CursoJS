// Exemplo de como chamar uma função call e apply

function Preçoderendafixa (moeda = 'R$', imposto = 0) {
    return `${moeda} ${this.inve + (this.renta * this.inve) - (this.inve * imposto)}`
}

const obj = {
    inve: 5000,
    renta: 0.10,
    Preçoderendafixa
}

global.inve = 3000
global.renta = 0.10
console.log(Preçoderendafixa())
console.log(obj.Preçoderendafixa('R$', 0.06))

const CDB = {inve: 900, renta: 0.013}

console.log(Preçoderendafixa.call(CDB))
console.log(Preçoderendafixa.call(CDB, 'R$'))
console.log(Preçoderendafixa.apply(CDB, [, 0.011]))