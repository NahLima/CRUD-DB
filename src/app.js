const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./model/repository')

db.connect()
app.use(cors()) 
app.use(express.json())

const index = require('./router/index')
const contatos = require('./router/routes')
const { Db } = require('mongodb')


app.use('/', index)
//app.use('/contatos', contatos)


module.exports = app

