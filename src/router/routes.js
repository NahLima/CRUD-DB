const express = require ('express')
const router = express.Router()
const controller = require("../controller/controller")

router.get('/contatos', controller.getAllContatos)
router.post('/contatos/criar', controller.addContato)

module.exports = router
