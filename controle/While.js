function Getinteiro (min, max) {
    const valor = Math.random() * (max - min) + min // random, sortea valores aleatorios que foram declarados na parte do while
    return Math.floor(valor)
}

let opcao = 0  // valor que começa a execução da repetição 

while (opcao != 1) { // estrutura que precisa de uma condição falsa para parar 
    opcao = Getinteiro(-9, 10) // dei valores para max e min 
    console.log(`Sua opção escolida foi ${opcao}.`) 
}

console.log('Programa finalizado') 

// while é usado para condições identermidas de repetições em uma estrutura 

