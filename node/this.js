console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)// O exports é a mesma coisa que module.exports 

function testeThis () {
    console.log('Dentro da Função...')
    console.log(this === global)
    console.log(this === exports)

}

testeThis()

// Basicamente this dentro de uma função aponta para o global, já fora da função ele aponta para module.exports





