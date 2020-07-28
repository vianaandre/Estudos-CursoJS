//UM ARRAY TE PERMITE TER UMA SEQUENCIA LINEAR DE IDENTIFICADORES DENTRO DE UMA UNICA VARIÁVEL 
//ELE É HETEROGENEO, OU SEJA, ELE TEM UMA TIPAGEM FRACA 
//SEMPRE USE ARRAYS DE UM TIPO SÓ, OU SEJA, NÃO BAGUNCE USANDO UM MONTE DE TIPOS EM UM SÓ ARRAY 
const valores = [1.1, 8.9, 6.3, 9.2]//IDENTIFIQUEI OS ARRAYS 
console.log(valores[1], valores[3])//PUXEI POR POSIÇÕES 
console.log(valores[5])//INDEFINIDO 

valores[4] = 19//ACRESCENTEI UM NOVO ARRAY 
console.log(valores)
console.log(valores.length)//MOSTRA QUANTOS ARRAYS TEM 

valores.push({id: 7}, false, null, 'teste')//ACRESCENTA NOVOS ARRAYS 
console.log(valores)
console.log(valores.length)

console.log(valores.pop())//CONSOME COM O ULTIMO DA POSIÇÃO DE ARRAYS 
delete valores[2]//DELETA POR POSIÇÃO 
console.log(valores)

console.log(typeof valores)//OBJETO 



