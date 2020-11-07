//const { response } = require('../app')
const contatoCollection = require('../model/Schema')


const getAllContatos = (req,res)=>{
    //console.log(req.url)
    contatoCollection.find((error, allContatos)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({message: "allContatos",allContatos})
            }
    })
}

const addContato  = (req,res)=>{
    const contatoBody = req.body // pegando o body que o usuario escreveu
    const contatoAdd= new contatoCollection(contatoBody) // criando um novo contato

    contato.save((error)=>{    // checando possiveis errros
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send(contatoAdd)
        }
    })
}

module.exports = { 
    getAllContatos,
    addContato
}

