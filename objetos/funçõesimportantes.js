const obj = {
    nome: "André",
    idade: 17,
    Altura: 1.90
}

console.log(Object.keys(obj)) // mostra os nomes de atributos dentro do objeto 
console.log(Object.values(obj)) // mostra os valores dos atributos dentro do objeto
console.log(Object.entries(obj)) // transforma os objetos em arrays 

Object.entries(obj).forEach(([chave, valor]) => { // destruturando o array e transformando em objeto 
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(obj, 'DatadeNascimento', { // coloca caracteristicas especificas de um objeto
    enumerable: true, // não será ou será inumerado no keys 
    writable: false, // valor do atributo não pode ser modificado  
    value: '10/04/2002' // dando valor ao atributo que está dentro do objeto 
})

console.log(obj)

// assing: nova função do ECMS2015

const obj2 = {
    nome: 'Felie'
}
const a2 = {
    idade: 18
}
const a3 = {
    altura: 1.69
}
const atribuido = Object.assign(obj2, a2, a3) // atribui os valores dos objetos listados depois da , de obj2
console.log(atribuido)

Object.freeze(a2)
a2.idade = 12
console.log(atribuido)


