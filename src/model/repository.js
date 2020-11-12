const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/reprograma"  // nome da conexão 

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser:true}) // esse parametro é para a gente não ficar recebenco erros // coloca uma string para json
    const connection = mongoose.connection
    
    connection.on("error",()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once("open", ()=> console.log("Conectamos no MongoDB"))
}

module.exports = {connect} // quando coloca em chaves é porque está exportando uma função inteira

// arquivo repositoy Cria a Conexão com o nosso banco de dados (mongoDB)



