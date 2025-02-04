const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // converte para JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

// app.get('/produtos', (req, res, next) =>{
//     console.log('Middleware 1...')
//     next()
// })

// app.get('/produtos', (req, res, next) => {
//     res.send({                                //Converte para JSON
//         nome: 'Notebook', //valor mockado
//         preco: 1234.56
//     })
// })









app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})