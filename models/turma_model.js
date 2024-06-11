import { Sequelize } from "sequelize";

import bd from "../config/database.js"

const turma = bd.define('turma',{
    id_turma: {
        type: Sequelize.INTEGER,
        primaryKey:true

    },
    nome_turma:{
        type: Sequelize.STRING(200)

    },
    turno_turma:{
        type: Sequelize.STRING(100)
    }

    },{ 
        freezeTableName: true, //bloqueia alteração
        timestamps:false
    
    })
    export default turma