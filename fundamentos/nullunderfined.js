let valor // não inicializada 
console.log(valor) //underfined

valor = null //ausência de valor (mais existe) 
console.log(valor) //nulo (mais usado)
console.log(typeof valor)

const produto = {}
console.log(produto.preco) //não está definido dentro o preco
console.log(produto) //objeto vazio 
 
produto.preco = 3.87
console.log(produto)

produto.preco = undefined //evite isso 
console.log(!!produto.preco) //impremi underfined
//delete produto.preco //deleta o produto.preco = underfined
console.log(produto)
produto.preco = null //sem preco 
console.log(produto.preco) //impremi o nulo 
console.log(!!produto.preco)

//quando voce quer zerar uma referencia coloque o nulo
