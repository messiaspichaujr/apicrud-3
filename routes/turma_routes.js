import express from "express"
import {getTurmas} from "../controllers/turma_controller.js"

const router = express.Router()

router.get('/turma', getTurmas)

export default router
//...