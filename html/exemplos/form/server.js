const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const caminho = __dirname + 'arquivo.json'

app.use(bodyParser.urlencoded( { extended: true })) // trasforma body da request para então aplicar uma persistência de dados usando o express

// manda para um request usuario e também manda também uma resposta de sucesso 
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    fs.writeFile(__dirname + 'arquivo.json', JSON.stringify(req.body), err => {
        console.log(err || 'Arquivo Salvo')
    })
    resp.send('<h1>Parabens. Usuário Cadastrado!!!</h1>')
})
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params)
    console.log(req.body)

    resp.send('<h1>Parabens. Usuário Alterado!!!</h1>')
})

app.listen(3003)