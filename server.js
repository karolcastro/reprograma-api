// este é o servidor da aplicação

// ja consta no app entao nao precisa chamar aqui tb
// const express =require ('express')// importar o express
// const app = express()// chamar o express

// toda vez que bater no servido com a / ele vai acessar esta funcao abaixo (pode ser req e resp) que é a de 'chamar'
    // responde.status é a informacao do que esta ocoorendo caso esteja certo aparece a mensagem
    //listen 3000 é o servidor 

const app = require('./src/app')
const port = 3000   
app.listen(port, function(){
    console.log (`app esta rodando na porta ${port}'`)
})
/* nao precisa mais da funcao abaixo pq esta sendo rodada na
     use('/', function(request, response){
     console.log('URL:' , request.url)
     response.status(200).send('Ola pessoal')
 }).listen(3000)*/
