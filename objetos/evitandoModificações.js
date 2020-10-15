// object.preventExtensions = permite deletar porém não atribuir 
const pessoa = Object.preventExtensions({
    nome:'André', idade: 18, peso: 78
})

pessoa.id = 123
delete pessoa.nome
pessoa.peso = 80
console.log(pessoa)
console.log(Object.isExtensible(pessoa)) //mostra se tem ou não preventExtensions


// object.seal: não deixa deletar e nem acrescentar 
const pessoa1 = {
    nome: 'Leornado',
    altura: 1.90,
    sexo: 'Masculino'
}
Object.seal(pessoa1)
pessoa1.estadoCivil = 'Solteitero'
delete pessoa1.altura
pessoa1.nome = 'Felipe'
console.log(pessoa1)
console.log(Object.isSealed(pessoa1))

// object.freeze: não posso acrescentar, nem mudar e nem deletar 
const pessoa2 = {
    nome: 'Henrique', 
    idade: 16,
    esporte: 'Futebol'
}

Object.freeze(pessoa2)
delete pessoa2.nome
pessoa2.peso = 12
pessoa2.nome = 'Gilberto'
console.log(pessoa2)