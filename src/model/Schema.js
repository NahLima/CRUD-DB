const mongoose = require("mongoose")

const Schema = mongoose.Schema

const contatosSchema = new Schema({
    
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String,   // quando trabalhamos com numeros que não vamos calcular usamos como string
        required: true
    },
    cidade:{
        type: String,
        required: true
    },
    dataNascimento:{
        type: String,
        required: true
    },
    fotoPerfil:{
        type: String,
        required: false
    },
    
},

    // {
    // collection:"contatos",
    // versionKey:false
    // }

)

const contatosCollection = mongoose.model('contatos',contatosSchema)

module.exports = contatosCollection