const app = require('./src/app')
const PORT = 5555

app.listen(PORT, function() {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})


//const PORT = process.env.PORT || 3030 --> outra possibilidade de fazer
