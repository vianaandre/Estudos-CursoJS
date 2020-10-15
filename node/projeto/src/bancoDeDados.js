const sequence = {
    _id: 1, 
    get id() { return this._id++ }
}

// objeto criado para os produtos 
const produtos = {}

// para indexar cada id com a chave de cada produto, assim possibilitando o acesso do produtos especificos por id 
function salvarProdutos (produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// retornando os produtos por id 
function getProduto (id) {
    return produtos[id] || {}
}

// retornando os produtos 
function getProdutos () {
    return Object.values(produtos)
}

// função de excluir 
function excluirProdutos (id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// exportado os dados desse modulo para outros 
module.exports = {
    salvarProdutos, 
    getProduto,
    getProdutos, 
    excluirProdutos
}
