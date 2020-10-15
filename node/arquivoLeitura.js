// passando o modulo do node 
const fs = require('fs')

// passando os caminhos 
const caminho = __dirname + '/arquivo.json' // representa o caminho - __dirname quer dizer que é para pegar o diretorio atual 
const caminhoDois = __dirname + '/arquivoGerado.json'

// sincrona...
const conteúdo = fs.readFileSync(caminho, 'UTF-8') // o utf-8 é o encode que precisa ser delcarado 
console.log(conteúdo)

// assincrona 
fs.readFile(caminho, 'utf-8', (error, conteúdo) => {
    const config = JSON.parse(conteúdo) // precisei transformar em objeto o arquivo.json
    console.log(`${config.db.host}: ${config.db.port}`)
})
// o require funcionou primeiro porque eles trabalham de forma assincrona

const arquivo = require('./arquivo.json')
console.log(arquivo.db)

// pegando arquivos de forma assincrona  
fs.readdir(__dirname, (err, conteúdo) => {
    console.log('Nome da pastas...')
    console.log(conteúdo)
    console.log('Esse aqui!!')
})

// pegando arquivos de forma sincrona
const files = fs.readdirSync(__dirname)
console.log(files)


// pegando os arquivo Gerados
fs.readFile(caminhoDois, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(conteudo)

    // gerando um arquivo json
    fs.writeFile(__dirname + 'GerandoTeste.js',conteudo ,err => {
        console.log(err || 'Arquivo Gerado')
    })
    // nesse contexto foi pego um arquivo gerado e foi gerado outro arquivo
})

