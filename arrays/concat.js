const filhos = ['Leandro', 'Carlos']
const filhas = ['Ana', 'Thaynara']
const concat = filhos.concat(filhas) // como concatenar dois arrays 
console.log(concat, filhos, filhas)

// mostrando que a partir a concatenação podemos acrescentar novos valores aos arrays 
console.log([].concat([1, 4, 6,], 2, [[3, 6, 2]]))

const array = ['André', 'Leandro']
const array2 = [12, 5, 6, ...array]

console.log(array2)
