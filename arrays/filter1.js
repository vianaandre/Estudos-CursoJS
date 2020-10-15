// implementando um proprio array partindo do prototype 
Array.prototype.filter2 = function (callback) {
    const NewArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            NewArray.push(this[i])
        }
    }
    return NewArray
}

const produtos = [
    {'Produto': 'Geladeira', 'Preço': 2999.99, 'Frágil': false}, 
    {'Produto': 'Notebook', 'Preço': 3499.99, 'Frágil': true}, 
    {'Produto': 'Iphone', 'Preço': 600.99, 'Frágil': true}, 
    {'Produto': 'Garafa de Àgua', 'Preço': 20.99, 'Frágil': false}
]

// callback que são passados no filter como uma condição para filtrar o array 
const preçosCaros = e => e.Preço > 1000
const fragilidade = e => e.Frágil == true

console.log(produtos.filter2(preçosCaros).filter2(fragilidade))



