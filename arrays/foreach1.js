const jogadores = ['Messi', 'Neymar', 'Pogba']

// foreach percore um array 

// usando foreach com callback // nome: elementoDoArray indice: indiceDoArray array: ArrayEmQuestão 
jogadores.forEach(function (valor, indice, array) {
    console.log(`${indice + 1}) ${valor}`)
    console.log(array)
})

// usando foreach com arrow function
jogadores.forEach( nome => console.log(nome))

// usando foreach a partir de uma função 
const jogadorestops = (nome, indice) => console.log(`${indice}: ${nome}`)
jogadores.forEach(jogadorestops)




 

