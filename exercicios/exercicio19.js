// função que recebe um codigo que determina um item, e recebe o valor desse item e calcula o valor a ser pago pelo lanche
/**
 * 100 -- cachorro quente -- 3.00
 * 200 -- hamburguer simples -- 4.00
 * 300 -- x burguer -- 5.50
 * 400 -- bauru -- 7.50
 * 500 -- refrigerante -- 3.50
 * 600 -- suco -- 2.50
 */


const pedido = function (Código, quantidade=1) {
    switch(Código) {
        case 100:
            console.log(`Valor do Pedido: ${quantidade * 3}`)
            this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 3
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         case 200:
             console.log(`Valor do pedido: ${quantidade * 4}`)
             this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 4
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         case 300:
             console.log(`Valor do Pedido: ${quantidade * 5.50}`)
             this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 5.50
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         case 400:
             console.log(`Valor do Pedido: ${quantidade * 7.50}`)
             this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 7.50
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         case 500:
             console.log(`Valor do Pedido: ${quantidade * 3.50}`)
             this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 3.50
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         case 600:
             console.log(`Valor do Pedido: ${quantidade * 2.50}`)
             this.AdicionaUm = function () {
                const somaUm = quantidade++
                const Multi = somaUm * 2.50
                console.log(`Valor do Pedido: ${Multi}`)
            }
         break

         default:
             console.log(`Produto não existente ${Código}`)
             this.AdicionaUm = function (){
                 console.log(`Produto não existente ${Código}`)
             }
         break
    }
}

const cachoro = new pedido(450)
cachoro.AdicionaUm()
cachoro.AdicionaUm()
cachoro.AdicionaUm()
// pedido()