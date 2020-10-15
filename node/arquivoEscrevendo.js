const fs = require('fs')

const produto = {
    nome: 'André', 
    id: 123, 
    idade: 17
}

// criado de forma assincrona 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})

// criado de forma sincrona 
const escrevendo = fs.writeFileSync(__dirname + '/arquivoGeradoSincrono.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})