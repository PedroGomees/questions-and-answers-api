import express from 'express';
const app = express()
import path from 'path'
import bodyParser from 'body-parser';
import router from "./routes/index.js"
import perguntaModel from './database/Pergunta.js'
//Usar EJS como view engine
app.set('view engine', 'ejs'); 
app.set('views', path.join(process.cwd(), 'views'));
//Linkar bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/', router);
app.listen(3000,()=>{
    console.log("app rodando")
})