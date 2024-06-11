import express from "express"
import cors from "cors"
import db from "./config/database.js"

import turmaRota from "./routes/turma_routes.js"
import turmaModel from "./models/turma_model.js"

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão com o Mysql estabelecida");

} catch (e) {
    console.log("Não deu certo a conexão com o servidor :(((", e);
 
}

server.use(turmaRota)
server.listen(5000, () => console.log("Servidor executando na porta 5000"))