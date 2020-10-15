// implementei o meu proprio map 
Array.prototype.map2 = function (callback) {
    const NewArray = []
    for (let i = 0; i < this.length; i++) {
        NewArray.push(callback(this[i], i, this))
    }
    return NewArray
}


const carrinho = [
    '{"Produto": "Borracha", "Preço": 3.60 }', 
    '{"Produto": "Caderno", "Preço": 10.90}', 
    '{"Produto": "Lápis", "Preço": 1.90}'
]

// transformando um JSON em objeto 
const transformaEmobjeto = e => JSON.parse(e)

// pegando apenas o preço de objeto 
const transfromaPreço = produto => produto.Preço

const resultado = carrinho.map2(transformaEmobjeto).map2(transfromaPreço)
console.log(resultado)


const atores = ['Daniel', 'Robison', 'Felipe']

const transforma = e => console.log(`${e}: Ator Principal`)

const resulta = atores.map(transforma)
console.log(resulta)