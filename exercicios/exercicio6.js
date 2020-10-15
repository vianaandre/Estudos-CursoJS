/* Crie duas Funções que recebe três parametros: capital inicial, taxa de juros e tempo de aplicação,
na primeira calcula o montante com juros simples e na segundo com juros composto  
*/

/*
 * criar função de juros simples sem parametros * 
 * passar parametros dentro do return com this * 
 * criar outra função de juros composto * 
 * passar os valores dos parametros com global * 
 * testar * 
 */
//juros simplses = j = c.i.t
//juros composto = s = p(1+i)**n

 function jurossimples (a=1, moeda='R$') {
     const juros = this.inicial * this.taxadejuros * this.tempo
     const soma = juros + this.inicial
     console.log(moeda + soma.toFixed(2))
 }

 function juroscomposto (a=1, moeda='R$') {
     const montante = this.inicial * ((a + this.taxadejuros)** this.tempo)
     console.log(moeda + montante.toFixed(2))
 }


 global.inicial = 5000
 global.taxadejuros = 0.06
 global.tempo = 12 
 jurossimples()
 juroscomposto()

 const objvalor = {
     inicial: 300000,
     taxadejuros: 0.0108,
     tempo: 36,
     jurossimples,
     juroscomposto
 }
 objvalor.jurossimples()
 objvalor.juroscomposto()
