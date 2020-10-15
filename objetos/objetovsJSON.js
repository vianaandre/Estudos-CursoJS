// transformando um objeto em JSON
const objeto = { nome: 'André', idade: 16, sobrenome: 'Viana'}
console.log(JSON.stringify(objeto))

// transformando um JSON em objeto 
console.log(JSON.parse('{"Nome": "André", "idade": 16, "Sobrenome": "Viana"}'))

console.log(typeof JSON.stringify )
console.log(typeof JSON.parse)

// https://jsonformatter.curiousconcept.com/#