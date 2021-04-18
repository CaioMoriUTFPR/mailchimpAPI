const express = require('express')
const app = express()
const porta = 80


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    var email = req.body.email
    console.log(nome + " " + sobrenome + " " + email)
    res.redirect('sucesso')
})

app.get('/sucesso', (req, res) => {
    res.sendFile(__dirname + '/sucesso.html')
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})