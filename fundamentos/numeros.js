const peso1 = 1.3
const peso2 = Number('2.0')//(2.0) VALOR ATRIBUIDO A PESO2

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//INTEIRO  
console.log(Number.isInteger(peso2))

const avaliação1 = 9.08888
const avaliação2 = 6.99990

const total = avaliação1 * peso1 + avaliação2 * peso2 
const media = total / (peso1 + peso2)

                //TIPOS DE FUNCIONALIDADE PARA NUMBER 
console.log(media.toFixed(2))//CASA DECIMAIS
console.log(media.toString())//RETORNA 
console.log(media.toString(2))//BINARIO 
console.log(typeof media)//PROPRIEDADE 
console.log(typeof Number)//FUNÇÃO 