// função que verefica o valor da anuidade de uma associação caso não seja paga no mês de janeiro 

/**
 * 5% de juros compostos 
 * juros composto = s = p(1+i)**n
 */

 function AtrazoBoco (mês, valorAnuidade) {
     switch(mês) {
         case 1:
             return `Valor da Anuidade: ${valorAnuidade}`
         break

         case 2:
             const juroscomposto1 = valorAnuidade * ((1 + 0.05)**1)
             return `Valor da Anuidade com Juros: ${juroscomposto1.toFixed(2)}`
         break

         case 3:
             const juroscomposto2 = valorAnuidade * ((1 + 0.05)**2)
             return `Valor da Anuidade com Juros: ${juroscomposto2.toFixed(2)}`
         break

         case 4:
             const juroscomposto3 = valorAnuidade * ((1 + 0.05)**3)
             return `Valor da Anuidade com Juros: ${juroscomposto3.toFixed(2)}`
         break

         case 5:
             const juroscomposto4 = valorAnuidade * ((1 + 0.05)**4)
             return `Valor da Anuidade com Juros: ${juroscomposto4.toFixed(2)}`
         break

         case 6:
             const juroscomposto5 = valorAnuidade * ((1 + 0.05)**5)
             return `Valor da Anuidade com Juros: ${juroscomposto5.toFixed(2)}`
         break

         case 7:
             const juroscomposto6 = valorAnuidade * ((1 + 0.05)**6)
             return `Valor da Anuidade com Juros: ${juroscomposto6.toFixed(2)}`
         break

         case 8:
             const juroscomposto7 = valorAnuidade * ((1 + 0.05)**7)
             return `Valor da Anuidade com Juros: ${juroscomposto7.toFixed(2)}`
         break

         case 9:
             const juroscomposto8 = valorAnuidade * ((1 + 0.05)**8)
             return `Valor da Anuidade com Juros: ${juroscomposto8.toFixed(2)}`
         break

         case 10:
             const juroscomposto9 = valorAnuidade * ((1 + 0.05)**9)
             return `Valor da Anuidade com Juros: ${juroscomposto9.toFixed(2)}` 
         break

         case 11:
             const juroscomposto10 = valorAnuidade * ((1 + 0.05)**10)
             return `Valor da Anuidade com Juros: ${juroscomposto10.toFixed(2)}`
         break

         case 12:
             const juroscomposto11 = valorAnuidade * ((1 + 0.05)**11)
             return `Valor da Anuidade com Juros: ${juroscomposto11.toFixed(2)}`
         break
     }
 }

 console.log(AtrazoBoco(11, 100))

