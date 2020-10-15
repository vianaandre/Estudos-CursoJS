// Função que retorna o valor de 0.3000000004 para R$0.30
/*
 * criar função  
 * passar parametros de valor e moeda 
 * returnar com console.log e com uma função de fixar tantos numeros depois da virgula concatenando com a moeda 
 * testar passando parametros 
 */

 function FixandoDecimais (valor, moeda='R$') {
     console.log(moeda + valor.toFixed(2).toString().replace('.', ','))// replace tem a função de substituir o ponto por virgula 
 }

 FixandoDecimais(0.430393939)