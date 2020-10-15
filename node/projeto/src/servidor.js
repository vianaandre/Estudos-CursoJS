const porta = 3003 

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// tem a função de pegar os body das requisições e transformar em objeto para manipularmos
app.use(bodyParser.urlencoded({ extended: true}))

// método criado para acessar todos os produtos - Método de respostas 
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

//método criado para acessar os produtos atraves do id - Método de respostas 
app.get('/produtos/:id', (req, res, next) => {
     res.send(bancoDeDados.getProduto(req.params.id))
})

// método criado para fazer requisições atraves do método post do http - Método de req e res
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco // essas funções tem como objetivo serem um tido de formulario que estara na web para o usuario premcher e ser mandado para o banco de dados 
    })
    res.send(produto) //JSON
})

// Método para alterar um produto - Método de req e res e alteração 
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

// Método que deleta produtos 
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})

// para listar a porta que iremos trabalhar 
app.listen(porta, () => {
    console.log(`Servidor Está  Na Rodando na Porta ${porta}`)
})