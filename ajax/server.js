// fazer require das depencias express e body-parser 
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// falando para o server servir as páginas static 
app.use(express.static('.'))
// falando para que todo arquivo que chegar aqui seja transformado em objeto pelo body-parser 
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// tratando os dados recebidos do front-end, onde ele pega esses dados e como resppsta manda eles de novo para o front-end 
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
    })

})
app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0 // booleano 

    res.send({
        ImparouPar: par ? 'par' : 'impar'
    })
})
app.listen(8081, () => console.log('executando...'))