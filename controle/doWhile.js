function Getinteiro (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

var opcao = -1  

do { 
opcao = Getinteiro(-1, 10) /*quando entra na estrutura o numero determinado por começo 
poode ser trocado por numeros aleatorios que foram colocado com min e max*/  
    console.log(`Sua escolha foi ${opcao}.`)
} while (opcao != -1)

console.log('Final do programa')

//do while faz com a repetição seja executa pelo menos uma vez 

let i = 0

do {
    i += 1
    console.log(i)
}while(i < 5)


const obj = [1, 3, 4, 5, 7]

for(let indice in obj) {
    console.log("Indice." + indice + " = " + obj[indice])
}

for (let i = 2; i < 12; i++) {
    console.log(i)
}