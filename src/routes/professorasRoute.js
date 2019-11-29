// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controllers/professorasController')// esta importando do controler
const authMiddleware = require("../middlewares/auth")

// rotas para o acesso // a ordem das rotas interfere
router.get('/', controller.get)
router.use(authMiddleware);
router.get('/:id', controller.getById)
router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman


module.exports = router