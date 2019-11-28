// este é o coração da aplicação

// chamar o express 

const express = require('express')
const mongoose = require("mongoose")// faz o require do mongoose que é para aconexao do mongo
const bodyParser = require("body-parser")
const app =  express()

mongoose.connect('mongodb://admin:reprograma1@ds225902.mlab.com:25902/reprogramameli', { useNewUrlParser: true }) // para chamar a conexao com o banco de dados mongo
//mongodb://localhost:27017/clientes

//chama o mongo
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))// tenta fazer a conexao e fica de olho caso haja algo errado
db.once('open', function () { // faz a conexao e se nao mostra o erro
  console.log('conexão feita com sucesso com o Mongo.')// se der certo aparece esta mensagem
})

// criacao das rotas // a rota sera o index
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')
const sessions = require("./routes/sessionRoute")

app.use(express.json());

app.use( function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    // console.log('Passamos pelo app'), 
    next()
})

app.use('/' , index)// tudo que tiver a / ele vai chamar para o index
app.use('/alunas', alunas) // alunas que esta
app.use('/professoras', professoras)
app.use("/sessions", sessions)

app.use(bodyParser.json())

//exportar o modulo// podemos usa -lo em outro lugar
module.exports = app