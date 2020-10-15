// tanto o this quanto o exports são criados para apontar para o module.exports 
console.log(module.exports === this)
console.log(exports === module.exports)

// todos apontam para o module.exports 
this.a = 2
exports.b = 20 
module.exports.nome = 'André'

console.log(module.exports)

// não irá funcionar, porque para criar um objeto que seja visivel para outros modulos preciso cria-lo apontando para o module.exports 
exports = {
    ola1: 'Boa Tarde'
}

console.log(module.exports)

// assim está certo 
module.exports = {
    identificador: 'Cabeça'
}

console.log(module.exports)


