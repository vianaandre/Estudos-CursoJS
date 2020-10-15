// Função que imprime o resultado da divisão de dois valores e o resto 
/*
 * criar function * 
 * passar parametros *  
 * fechar função * 
 * criar duas constantes com as operações de divisão e resto  * 
 * passar para return essas duas constantes arredondando o valor de resultado para baixo * 
 * testar chamando função e passando os valores dos parametros *
 */

 function ResultadoeResto (dividendo=0, divisor=0) {
     const resultado = dividendo / divisor
     const resto = dividendo % divisor

     return `
 Resultado da Divisão = ${Math.floor(resultado)} 
 Resto da Divisão = ${resto}
     `
 }

 console.log(ResultadoeResto(10, 3))