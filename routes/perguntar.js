import express from "express"
const router = express.Router()

router.get('/',(req,res)=>{
    res.render("perguntar")
})


export default router;