
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
exports.getIdade = (req,res) =>{
    const id = req.params.id // req = requisicao
    const aluna = alunas.find(item => item.id == id)// objeto nao itera com map ou outro //o segundo id é o que esta na const id
    const data = aluna.dateOfBirth
    
    const arrData = data.split('/')// separar dentro da array
    const dia = arrData[0]// posicao que o dia vai ficar dentro da array
    const mes = arrData[1]
    const ano = arrData[2]
    const idade = calcularIdade (ano, mes, dia)

    // console.log(data)

    res.status(200).send({idade})// colocar {} para ele aceitar que é um objeto e nao uma istring
 
}
function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) { // para calcular a idade
      const now = new Date()// instancia da data no dia de hoje
      const anoAtual = now.getFullYear()// instancia do ano
      const mesAtual = now.getMonth() + 1// instancia do mes
      const hoje = now.getDate()// instancia do dia
    
      let idade = anoAtual - anoDeNasc //
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }// funcao para calcular o mes correto que a menina faz aniversario
      return idade
    }
