let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//!:NEGAÇÃO !!:VOLTA PARA O VALOR ORIGINAL, OU SEJA, VERDADEIRO 

console.log('os verdeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!1)
console.log(!!' ')//POR CAUSA DO ESPAÇO
console.log(!!'texto')
console.log(!![])//FUNÇAÕ ARRAY 
console.log(!!{})//BLOCO DE CÓDIGOS 
console.log(!!Infinity)//(0.7 / 0)
console.log(!!(isAtivo = true))//VERDADEIRO

const up = texto => texto.toUpperCase() // uma função que funciona para colocar uma string em caixa alta
console.log(`os ${up('falsos')}`)
console.log(!!0)
console.log(!!'')//SEM ESPAÇO, QUER DIZER QUE NÃO TEM NADA ESCRITO 
console.log(!!null)
console.log(!!NaN)//NOT ON NUMBER
console.log(!!undefined)
console.log(!!(isAtivo = false))//VOLTA O VALOR ORIGINAL 

console.log("Na prática")
var nome = ''
console.log(nome || 'Desconhecido')//OU É MUITO USADO PARA FUNCÕES DE PADRÕES 

