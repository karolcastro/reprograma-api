
// arquivo controler
const alunas = require('../model/alunas.json')
// esta pegando a lista de todas as alunas
exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}
// exportar o id
exports.getById = (req, res) => {
    const id  = req.params.id
    if (id > 17 || id <= 0){
        // res.send(' id nao é valido')
        res.redirect(301, 'https://www.mercadolivre.com.br/')// pode colocar qualquer pagina
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}
exports.getBooks =(req,res) =>{
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if (!aluna){
        res.send('nao encontrei esta aluna')
    }
    const livros = aluna.livros
    const livrosLivros = livros.filter(livro => livro.leu ==true)
    
    res.status(200).send(livrosLivros)
}
exports.getSp = (req,res) =>{
   
    const SP = alunas.filter(nasceuSP => nasceuSP.nasceuEmSp == "true")
    const nomesSp = []// array que vai ter o nome das alunas
    SP.map(aluna => nomesSp.push(aluna.nome )) // procurar os nomes das alunas e puxar para a array aluna

    res.status(200).send(nomesSp)// mostra na tela o nome das alunas 

}