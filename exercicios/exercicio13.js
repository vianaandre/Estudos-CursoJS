// crie um programa que confere se é um dia util ou um dia de fim de semana 
/**
 * 1 = domingo 
 * 7 = sabado 
 */

 const diaUtilouNão = function (dia) {
     switch(Math.ceil(dia)) {
         case 1: case 7: case 8: case 14: case 15: case 21: case 22: case 28: case 29:
             console.log(`Fim de semana ${dia}`)
         break
         case 2, 3, 4, 5, 6: case 9, 10, 11, 12, 13: case 16, 17, 18, 19, 20: case 23, 24, 25, 26, 27:
             console.log(`Dia Util ${dia}`)
     }
 }
 diaUtilouNão(29)
 diaUtilouNão(27)

