console.log(typeof Array, typeof new Array, typeof [])


// let funcionarios = new Array('Miguel', 'Leandro', 'Amanda', 'Henrique')
let funcionarios = ['Miguel', 'Leandro', 'Amanda', 'Henrique'] // melhor maneira de criar um Array 

console.log(funcionarios)
console.log(funcionarios[3]) // chamando por indice, com essa maneira de indice voce também tem a possibilidade de mudar o valor do indice de um array 

funcionarios[4] = 'Beto'
funcionarios.push('André')
console.log(funcionarios)
console.log(funcionarios.length) // o total de elementos 
funcionarios[10] = 'Gilberto' // os elementos de indice 6, 7, 8, 9 foram declarados como underfined  

console.log(funcionarios.length)
console.log(funcionarios)

console.log(funcionarios[0])
console.log(funcionarios[1])
console.log(funcionarios[3])
console.log(funcionarios[6])// underfined 
console.log(funcionarios[7] === undefined) // sim o inidicador desse arrays está indefinido 

console.log(funcionarios)
funcionarios.sort() // ordena os valores do array
console.log(funcionarios)

delete funcionarios[3] // não deleta, apenas deixa como uderfined 
console.log(funcionarios[3])
console.log(funcionarios[4])

funcionarios = ['Beto', 'Negão', 'Leandro']
funcionarios.splice(1, 2, 'Marcos') // deleto o negão e acrescentou o marcos 
console.log(funcionarios)
console.log(funcionarios.length)

console.log(Array.prototype.__proto__ === Object.prototype)

const numeros = [2, 5, 1, 4, 6, 3, 7, 9, 8, 10]
numeros.sort()
console.log(numeros)
