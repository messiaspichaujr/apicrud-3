import turma from "../models/turma_model.js"

export const getTurmas = async (req, res) => {
    
    try {
        const turmas = await turma.findAll()
        res.send(turmas)

    } catch (e) {
        console.log("Erro ao acessar a tabela Turma", e)
        
    }
}
