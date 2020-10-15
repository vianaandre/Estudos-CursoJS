// cosnt e let 
{
    let a = 1
    var b = 12
    var c = a
}

console.log(c)
console.log(b)
console.log(c + b)

// templete string 
const produto = 'Notebook'
console.log(`Eu quero um ${produto}`)

// destructuring
const [l, e, ...tras] = 'André' // para cada indice, um letra é indexada 
console.log(l, e, tras)
console.log(tras[0])// pegando o d de 'André'

const [a, , w] = [2, , 3]
console.log(a + w)

const {nome: id, idade} = {nome: 'André', idade: 18}
console.log(`O ${id} tem ${idade} anos!!`)


