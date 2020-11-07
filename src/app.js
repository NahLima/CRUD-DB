const express = require('express')
const app = express()
const cors = require('cors')



app.use(cors()) 
app.use(express.json())

const index = require('./router/index')
const contatos = require('./router/routes')


app.use('/', index)
//app.use('/contatos', contatos)


module.exports = app

