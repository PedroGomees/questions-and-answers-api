import express from "express"
const router = express.Router()
import Pergunta from '../database/Pergunta.js'


router.get("/", (req, res) => {
    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas 
        });
    });
});
export default router;


