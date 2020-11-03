// não aceita repetição/ e não é indexado

const { promises } = require("fs");
const { set } = require("lodash");
// set é como se fosse um objeto, porém não tendo: 
// indexador - repetição
const jogos = new Set()

// tem que usar add para adionar valores no set 
jogos.add('Fifa 19')
jogos.add('Call of duty')
jogos.add('Battlefield')
jogos.add('Amoung-s').add('free fire').add('Pubg')
console.log(jogos)

console.log(jogos.has('fifa 19'))// vereficador
console.log(jogos.has('Fifa 19'))
jogos.delete('Call of duty')// deleta 
console.log(jogos.has('Call of duty'))
console.log(jogos)
console.log(jogos.size)// lenght 

const times = ['Grêmio', 'Flamengo', 'Inter', 'Botafogo']
const settimes = new Set(times)// passando um array como valor 
console.log(settimes)


