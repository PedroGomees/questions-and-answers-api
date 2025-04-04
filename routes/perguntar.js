import express from "express"
const router = express.Router()
import Pergunta from "../database/Pergunta.js"

router.get('/',(req,res)=>{
  
    Pergunta.findAll({raw:true}).then(perguntas =>{
        console.log(perguntas)
        res.render("perguntar",{
            perguntas: perguntas
        })
    })
})

router.post("/salvar",(req,res)=>{
    
    var titulo = req.body.titulo;
    var desc = req.body.desc
    res.send("Formulário recebido" + titulo + desc)
    Pergunta.create({
        titulo: titulo,
        descricao: desc
    }).then(()=>{
        res.redirect("/")
    })
})

export default router;