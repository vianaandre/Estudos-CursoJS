// pessoa -> endereço: 123 -> (dentrodoendereço) atributos 
const pessoa = { valor: 10 }
pessoa.valor = 123
pessoa.idade = 12
console.log(pessoa)


// pessoa -> endereço novo: 456 -> {...} = nesse caso vai dar erro porque a constante será mudada de enderço
// pessoa = { valor: 222 }
// console.log(pessoa)

Object.freeze(pessoa) // congela o objeto pessoa, fazendo com que não possa mais acrescentar novos atributos e nem excluir atributos 

pessoa.endereço = 'Rua sergipe'
delete pessoa.valor
console.log(pessoa)

const pessoaFala = Object.freeze ({ nome: "Dedé", Idade: 18 })
delete pessoaFala.Idade
pessoaFala.Pais = 'Brasil'
console.log(pessoaFala)

