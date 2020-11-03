const { resolve } = require("path")

let a = 1 
console.log(a)

const p = new Promise(function(cumprirPromesa) {
    // cumprirPromesa([...])
    // cunprirPromesa({x: 12, y: 10})
    cumprirPromesa(3)
})

p.then(function(valor) {// a 
    console.log(valor)
})

// Bricando com promises 
const b = new Promise(resolve => {
    resolve(['André', 'Gilberto', 'Sandra', 'Ana'])
})

const pegarArray = Array => Array[2]
const pegarString = cadeiaString => cadeiaString[0]
const caixaBaixa = minuscula => minuscula.toLowerCase()
const caixaAlta = maiuscula => maiuscula.toUpperCase()

// Usando then e arrow function
b
   .then(pegarArray)
   .then(pegarString)
   .then(caixaBaixa)
   .then(caixaAlta)
   //    .then(valor => console.log(valor))
   .then(console.log)