// estrutura condicional que retorna strings com condição para uma determinada fruta 
/**
 * Caso maçã, retorne no console: “Não vendemos esta fruta aqui”
 * Caso kiwi, retorne: “Estamos com escassez de kiwis”
 * Caso melancia, retorne: “Aqui está, são 3 reais o quilo”
 */

 function frutaEscolida (fruta) {
     switch (fruta) {
         case 'Maça': 
         return `Não vendemos essa fruta aqui`
         break

         case 'Kiwi': 
         return `Estamos com escassez de Kiwis`
         break

         case 'Melancia': 
         return `Aqui estão, são 3 reais o quilo`
         break

         default:
             alert('Erro no console')
         break
     }
 }

 console.log(frutaEscolida('Maça'))
 console.log(frutaEscolida())
//  console.log(frutaEscolida(''))
