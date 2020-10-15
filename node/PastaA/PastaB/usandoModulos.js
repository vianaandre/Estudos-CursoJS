// a partir do ../ tenho a possibilidade de sair de pastas e entrar em outras 
const moduloB = require('../../moduloB')

console.log(moduloB.falar())

// exportando com index
const receber = require('./PastaC')
console.log(receber.id)

