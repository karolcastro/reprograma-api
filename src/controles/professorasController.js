// arquivo controler
const professoras = require('../model/professoras.json')
// esta pegando a lista de todas as alunas
exports.get = (req, res) => {
    const prof = professoras.map(item => {
        item.cpf = "***********"
        // delete item.cpf // pode substituir ou deletar
        return item
    })
    
    // console.log(req.url)
    res.status(200).send(prof)
}

exports.getById = (req,res) => {
    const id = req.params.id
    const prof = professoras.find(item => item.id == id) // escolheu a aluna

    delete prof.cpf
    // const cpfCpf = professoras.map(item => {
    //     item.cpf = "***********"// outra opcao
    // //    delete item.cpf // pode ser uma outra opcao
    //     return item
    // })
    res.status(200).send(prof)
}
