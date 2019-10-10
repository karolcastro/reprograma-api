// chamar o express 

const express = require('express')
const app =  express()

// criacao das rotas // a rota sera o index
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')

app.all('*', function(req,res,next){
    console.log('Passamos pelo app'), 
    next()
})

app.use('/' , index)// tudo que tiver a / ele vai chamar para o index
app.use('/alunas', alunas) // alunas que esta

//exportar o modulo// podemos usa -lo em outro lugar
module.exports = app