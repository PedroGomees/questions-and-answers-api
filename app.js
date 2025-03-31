import express from 'express';
const app = express()
import path from 'path'
import router from "./routes/index.js"
//Usar EJS como view engine
app.set('view engine', 'ejs'); 
app.set('views', path.join(process.cwd(), 'views'));


app.use(express.static('public'));
app.use('/', router);
app.listen(3000,()=>{
    console.log("app rodando")
})