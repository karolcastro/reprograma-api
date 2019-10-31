
// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controles/alunasControler')// esta importando do controler

// rotas para o acesso // a ordem das rotas interfere
router.get('/', controller.get)
router.get('/:id', controller.getById)
router.get('/:id/Books', controller.getBooks) // criar rota dos livros
router.get('/nasceuSp', controller.getSp)
router.get('/:id/dateOfBirth', controller.getIdade)

router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman
router.post('/:id/Books',controller.postBooks)




// //('/', function(req, res){// o caminho 
//     res.status(200).send(alunas) //o que quer acessar
// }) apagamos este pq ja importamos no controler

module.exports = router