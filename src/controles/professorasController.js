// arquivo controler
const professoras = require('../model/professoras.json')
// esta pegando a lista de todas as alunas

const fs = require('fs'); // arquivo file system para gravar as informações
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

// fazer o post para gravar as informacoes que foram acrescentadas no postman
// function caso tenha erro devolve uma resposta com o if
exports.post = (req, res) =>{
    const {id, nome, especialidade, signo, cpf} = req.body;
    professoras.push({id, nome, especialidade, signo, cpf});

    //arquivo fs para conseguir escrever // utf8 é para entender os caracteres especiais
    fs.writeFile('./src/model/professoras.json', JSON.stringify(professoras), 'utf8', function(err){
        if (err){
           return res.status(500).send({message: err}) ;
        }
        console.log(' The file was saved!')
    });

    return res.status(201).send(professoras);
}