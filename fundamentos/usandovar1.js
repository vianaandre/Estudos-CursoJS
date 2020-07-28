{
    {
        {
            {
                {
                    var sera = "Será????"
                }
            }
        }
    }
}
console.log(sera)//mesmo dentro dos blocos ainda sim da de acessar a var 

function teste() {
    var local = '123'
    console.log(local)
}
teste()
// teste ()
// console.log(local)
var local = 32
console.log(local)

/*
 * Variável global: é quando vc cria uma variável que não seja dentro de uma função, ou seja, 
esssa variável pode ser acessada e trocada o valor quando der vontade. 
 * Variável dentro de função: já essa só pode ser alterada e usado dentro da função, dai 
 acaba sofrendo menos perigo de ser alterada 
 */

 function teste() {
     var fora = 33
    console.log(fora)
 }
 teste()
 fora = 555
 console.log(fora)
