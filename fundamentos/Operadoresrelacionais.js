// == : igual sem levar em consideração o tipo da variável
// === : extritamente igual, dai leva em consideração o tipo (mais adequado de usar)

console.log('1)', '1' == 1)//comparando se 1 é igual a 1 
console.log('2)', '1' === 1)//nesse caso daria false, porque o primeiro 1 é uma string e o segundo é um number
console.log('3)', '3' != 3)//o 3 é diferente de 3 (false)
console.log('4)', '3' !== 3)// verdadeiro porque segue o exemplo do 2 

console.log('5)', 3 < 2)// 3 menor que 2
console.log('6)', 3 > 2)// 3 é maior que 2
console.log('7)', 3 <= 2)// 3 é menor ou igual a 2 
console.log('8)', 3 >= 2)// 3 é maior ou igual a 2

const d1 = new Date(0)// 01 de 1970 horario 00:00
const d2 = new Date(0)// 01 de 1970 horario 00:00
console.log('9)', d1 === d2)// não porque não estão no mesmo endereço de memoria 
console.log('10)', d1 == d2)// nesse segue o contexto do primeiro 
console.log('11)', d1.getTime === d2.getTime)// nesse sera verdadeiro porque estão levando em consideração o horario e não o espaço na memoria
console.log('12)', undefined == null) // não considerando o tipo 
console.log('13)', undefined === null)// considerando o tipo