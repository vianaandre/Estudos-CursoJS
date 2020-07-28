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