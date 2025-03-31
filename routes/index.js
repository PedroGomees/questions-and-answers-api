import express from 'express'
import perguntarRouter from './perguntar.js'
const router = express.Router()



//Rota pagina inicial

router.get('/',(req,res)=>{
    res.render("index")
})


//Rota de pergunta
router.use("/perguntar",perguntarRouter)
export default router;