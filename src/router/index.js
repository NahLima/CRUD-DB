const express = require('express');
const { response } = require('../app');
const router = express.Router()

router.get("/", function(request,response){
    response.status(200).send({
        titulo:"Agenda de contatinhos {reprograma}",
        version:"1.0.0"
    })
})


module.exports = router


