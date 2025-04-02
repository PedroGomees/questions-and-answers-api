import express from "express"
const router = express.Router()

router.get('/',(req,res)=>{
    res.render("perguntar")
})

router.post("/salvar",(req,res)=>{
    
    var titulo = req.body.titulo;
    var desc = req.body.desc
    res.send("Formulário recebido" + titulo + desc)
})

export default router;