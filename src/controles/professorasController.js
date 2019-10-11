// arquivo controler
const professoras = require('../model/professoras.json')
// esta pegando a lista de todas as alunas
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}