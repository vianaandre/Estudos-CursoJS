const pai = { nome: 'Sandra', corPele: 'branca'}

const filho1 = Object.create(pai) // com isso o filho1 aponta para o pai 
filho1.nome = 'André'
console.log(filho1.corPele)
console.log(Object.values(filho1))

const filho2 = Object.create (pai, {
    nome: { value: 'Bianca', enumerable: true, writable: false}
})
filho2.nome = 'dedé'
console.log(Object.values(filho2))

console.log(`A ${filho2.nome} tem a cor da sua pele ${filho2.corPele}`)//criado uma construção a partir da herança 

console.log(Object.values(filho1))// só pega atributos criados no filho e não os recebidos de herança 
console.log(Object.keys(filho2))

for (let key in filho1) {
    filho1.hasOwnProperty(key) ? // propriedade usada para vereficar se um atributo é mesmo daquele objeto ou está por herança 
    console.log(key) : console.log(`Por herança ${key}`)
}