//const { response } = require('../app')
const { response } = require('../app')
const contatoCollection = require('../model/Schema')


const getAllContatos = (req,res)=>{
    console.log(req.url)

    contatoCollection.find((error, allContatos)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "GET com sucesso",
                allContatos
            })
        }
    })
}

//-----------------------------------------------------------------------------------------
const addContato  = (req,res)=>{
    
    const contatoBody = req.body // pegando o body que o usuario escreveu
    const contatoAdd= new contatoCollection(contatoBody) // criando um novo contato

    contatoAdd.save((error)=>{    // checando possiveis errros
        if(error){
            return res.status(400).send(error)
        }else{
            return res.status(200).send({
                mensagem: "POST com sucesso",
                contatoAdd
            })
        }
    })
}

//--------------------------------------------------------------------------------------------

//getcontatoID
const  getContatoById =  (req,res) => {
    const idParam = req.params.id
    contatoCollection.findById(idParam, (error, contatoID)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(contatoID){
                return res.status(200).send(contatoID)
            }else{
                return res.status(404).send("Assinante não encontrado")
            }
        }
    })
}

//-------------------------------------------------------------------------------------------------------------

//getBYNome

const  getByNome =  (req,res) => {
    const nomeParam = req.params.nome
    contatoCollection.find({"nome":nomeParam},(error, contatoNome) =>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(contatoNome){
                return res.status(200).send(contatoNome)
            }else{
                return res.status(404).send("Assinante não encontrado")
            }
        }
    })
}


// const getByNome = (req, res) => {
//     const nomeParam = req.params.nome
//     contatoCollection.find({"nome":nomeParam}, (error, contatoNome) => {
//       if(error) {
//         return res.status(500).send(error)

//       } else if(contatoNome == '') {
//         return res.status(404).send('Contato não encontrado.')

//       } else {
//         return res.status(200).send(contatoNome)
//       }
//     })
//   }

//----------------------------------------------------------------------

//deleteById

const deleteNomeById = (req,res)=>{
    const idParam = req.params.id
    contatoCollection.findByIdAndDelete(idParam, (error, contatoID)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(contatoID){
                return res.status(200).send({mensagem:"Contato apagado"})
            }else{
                return res.status(404).send("Assinante não encontrado")
            }
        }
    })
}

const upDateCel = (req,res) =>{
    const idParam = req.params.id
    const celBody = req.body
    const novo = {new:true} // edtamos dizendo que estamos apenas atualizando

    contatoCollection.findByIdAndUpdate(idParam, celBody, novo,(error,celNovo)=>{

            if(error) {
                return res.status(500).send(error)
            } else if (celNovo) {
                return res.status(200).send({mensagem: "Celular atualizado",celNovo})
            } else {
                return res.status(404).send({mensagem: "Contato não encontrado"})
        }
    
    })
}
//-------------------------------------------------------------------------------------------------------

const updateContato = (req, res) => {

    const idParam = req.params.id
    const contatoBody = req.body
    const update = {new: true}

    contatoCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, contatoUP) => {

        if(error) {
            return res.status(500).json({mensagem: "Aconteceu algum erro.",error })
           
        } else if (contatoUP) {
            return res.status(200).send({mensagem: "Contato atualizado.",contatoUP})
        } else{
            return res.status(404).send(404)
        }
    })
}


module.exports = { 
    getAllContatos,
    addContato,
    getContatoById,
    getByNome,
    deleteNomeById,
    upDateCel,
    updateContato
}

