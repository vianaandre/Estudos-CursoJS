const { map } = require("lodash");

const tecnologia = new Map()

// nesse contexto a chave é nomeada por react e angular
tecnologia.set('react', { framework: false})
tecnologia.set('angular', { framework: true})
console.log(tecnologia.get('react').framework)
console.log(tecnologia.get('angular'))


// basimente se utiliza o new Map para dar nome as chaves 
const mapteste = new Map([ // eles funcionam como arrays 
    [function () { }, 'função'],
    ['Função', function () { }],
    [new Date(), 'Data']
])

mapteste.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(mapteste.has('Função'))// verefica
mapteste.delete(function () { })
console.log(mapteste.has(function () { }))
console.log(mapteste.size)// como se fosse o leghnt 

mapteste.forEach((vl, ch) => {
    console.log(ch, vl)
})
const nome = (a) => console.log(a)

mapteste.set('12', 23)
mapteste.set('Qual o seu nome', nome('André'))

mapteste.forEach((vl, ch) => {
    console.log(ch, vl)
})

