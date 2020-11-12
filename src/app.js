const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./model/repository')

const index = require('./router/index')
const contatos = require('./router/routes')

db.connect()
app.use(cors()) 
app.use(express.json())
app.use('/', index)
app.use('/contatos', contatos)

module.exports = app

