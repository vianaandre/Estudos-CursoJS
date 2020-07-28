// Armazenando uma funcão em uma variável
const imprimirSoma = function (a, b){ //função sem retono 
    console.log(a + b)
} 

imprimirSoma(2, 3)

// Armazenando uma funçaõ arrow em uma variável 
const soma = (a, b) => { //=> substitui a function 
    return a + b
}
console.log(soma(2, 6))

//retorno implícito, forma de criar uma função com uma única setença de código, ou seja reduzida  

const subtração = (a, b) => a - b
console.log(subtração(2, 3))

const imprimir2 = a => console.log('letras' + a)
imprimir2('Legal!!')

var imprimirtmassa = m => console.log(m)
imprimirtmassa('Massa')

 //basicamente voce pode pegar uma função e atribuir uma variável

 const multiplicacao = (t, y) => t * y
console.log(multiplicacao(3, 7))





