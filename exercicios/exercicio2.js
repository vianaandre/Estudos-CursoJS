// Função que classifica os triângulos em Isósceles, Equilateros e Escaleno 
// Isósceles: Todos os lados iguais 
// Equilátero: Dois lados iguais e um diferente 
// Escaleno: Todos os lados diferentes 
/*
 * Cria function *
 * Criar parametros *
 * Fechar Fucntion * 
 * Criar if para Equilátero * 
 * Passar os parametros de testes * 
 * Criar else if para Isósceles * 
 * Passar os parametros de testes * 
 * Criar else if para escaleno 
 * Passar os parametros de testes
 */

 function classifica (LadoA, LadoB, LadoC) {
     if (LadoA == LadoB && LadoB == LadoC && LadoC == LadoA ){
         console.log('Equilátero')
     }
     else if (LadoA == LadoB && LadoB != LadoC || LadoA == LadoC && LadoC != LadoB || LadoB == LadoC && LadoC != LadoA){
         console.log('Isósceles')
     }else if (LadoA != LadoB && LadoB != LadoC){
         console.log('Escaleno')
     }
 }

 classifica(2, 2, 2)// Equilátero
 classifica(2, 3, 2)// Isósceles 
 classifica(2, 1, 5)// Escaleno 