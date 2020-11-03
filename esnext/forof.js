// o for of retorna os valores 
for (let i of 'André') {
    console.log(i)
}

// o for in retorna os indices 
for (let i in 'André') {
    console.log(i)
}

const estudos = ['get', 'set', 'Promiss']

for(let i of estudos) {
    console.log(i)
}

const prontosEstudos = new Map([
    ['Fundamentos', function() { }], 
    ['Functions', {}], 
    ['Arrays', lindo = () => 'André'], 
])

// pegando as chaves 
for(let i of prontosEstudos.keys()) {
    console.log(i)
}

// pegando os valores 
for(let i of prontosEstudos.values()) {
    console.log(i)
} 

// tranformando em array 
for(let i of prontosEstudos.entries()) {
    console.log(i)
    const transforma = i.join(', ')
    console.log(transforma)
    // ele vai retorna o primeiro indice em forma de array e em forma normal, e assim em diante 
}

// retornar chave e valor
for(let [ch, vl] of prontosEstudos) {
    console.log(ch, vl)
}