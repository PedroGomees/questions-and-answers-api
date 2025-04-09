import express from 'express'
import perguntarRouter from './perguntar.js'
const router = express.Router()
import db from '../database/db.js'
import homeRouter from './home.js'
//Database
db
    .authenticate().then(()=>{
        console.log("Conexão feita com sucesso")
    }).catch((Error) =>{
        console.log(Error)
    })

//Rota pagina inicial
router.use('/',homeRouter)



//Rota de pergunta
router.use("/pergunta",perguntarRouter)
export default router;