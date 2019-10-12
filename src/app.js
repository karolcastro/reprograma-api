// chamar o express 

const express = require('express')
const app =  express()

// criacao das rotas // a rota sera o index
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

app.use( function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    // console.log('Passamos pelo app'), 
    next()
})

app.use('/' , index)// tudo que tiver a / ele vai chamar para o index
app.use('/alunas', alunas) // alunas que esta
app.use('/professoras', professoras)

//exportar o modulo// podemos usa -lo em outro lugar
module.exports = app