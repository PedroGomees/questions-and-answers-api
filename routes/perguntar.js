import express from "express"
const router = express.Router()
import Pergunta from "../database/Pergunta.js"
import Resposta from "../database/resposta.js"

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
    Pergunta.create({
        titulo: titulo,
        descricao: desc
    }).then(()=>{
        res.redirect("/perguntar")
    })
})

router.get("/respostas/:id",(req,res)=>{
    const id = req.params.id;
    Pergunta.findOne({
        where:{id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            Resposta.findAll({
                where:{perguntaId: pergunta.id}
            }).then(respostas=>{
                res.render("perguntas",{
                    pergunta: pergunta,
                    respostas: respostas
            })
           
            });
        }else{
            res.redirect("/")
        }
    })
})

router.post("/respostas/save",(req,res)=>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect("/pergunta/respostas/"+perguntaId);
    })

})
export default router;