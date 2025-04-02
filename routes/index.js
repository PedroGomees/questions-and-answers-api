import express from 'express'
import perguntarRouter from './perguntar.js'
const router = express.Router()
import db from '../database/db.js'
//Database
db
    .authenticate().then(()=>{
        console.log("Conexão feita com sucesso")
    }).catch((Error) =>{
        console.log(Error)
    })

//Rota pagina inicial

router.get('/',(req,res)=>{
    res.render("index")
})


//Rota de pergunta
router.use("/perguntar",perguntarRouter)
export default router;