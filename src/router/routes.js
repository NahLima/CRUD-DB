
const express = require("express")
const router = express.Router()
const controller = require("../controller/controller")

router.get("/", controller.getAllContatos) // no postman tem que escrever contatos --> não sei pq!?
router.post("/criar", controller.addContato)
router.get("/id/:id", controller.getContatoById)
router.get("/nome/:nome", controller.getByNome) // precisou colocar nome/:nome por conta do params {"nome":nomeParam} do controller
router.delete("/deletar/:id", controller.deleteNomeById)
router.patch("/atualizar/telefone/:id", controller.upDateCel)
router.put("/atualizar/:id", controller.updateContato)

module.exports = router
