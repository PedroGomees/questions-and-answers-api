import express from "express"
const router = express.Router()
import db from '../database/db.js'
import { Sequelize } from "sequelize"

const Resposta = db.define("respostas",{
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

Resposta.sync({force:false});
export default Resposta