const numeros = [1, 3, 5, 7, 9, 11]

//usando o map com callback 

let par = numeros.map( function (e) { //e: elementos dos arrays 
    return e + 1
})

console.log(par)

//criei três function arrow e passei dentro do método map 
const soma = e => e + 10
const multi = e => e * 2
const transformaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

par = numeros.map(soma).map(multi).map(transformaDinheiro)//chamei as funções criadas com function arrow 

const valores = num => num > 5
const transforma = numeros.filter(valores)
const transforma1 = numeros.map(valores)
console.log(transforma, transforma1)


