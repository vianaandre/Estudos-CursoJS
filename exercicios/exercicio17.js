/* função que mostra planos de salarios e da a opção de escolha para que aja um reajuste no
 salario atual de um funcionario*/

 // plano A = 10% de reajuste
 // plano B = 15% de reajuste
 // plano C = 20% de reajuste


 const planoA = 10
 const planoB = 15
 const planoC = 20

 const escolendoPlano = function (esolha, salarioAtual) {
     switch(esolha){
         case planoA:
             return `Reajuste: ${salarioAtual * (esolha/100 + 1)}`
         break

         case planoB: 
             return `Reajuste: ${salarioAtual * (esolha/100 + 1)}`
         break

         case planoC: 
            return `Reajuste: ${salarioAtual * (esolha/100 + 1)}`
         break

         default: 
            return `Plano invalido`
         break
     }
 }

 console.log(escolendoPlano(planoB, 10000))
 



