import express from 'express'
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from "cors"
import router from './src/routes/productsRouter.js'


const port = process.env.PORT || 5001

const app  = express()
app.use(express.json())
app.use(cors())
app.use("/api/products" , router)



app.get("/",  (req,res)=>{
    res.send("salam back qardas ")

})


app.listen(port , ()=>{
    console.log(`server setting ${`http://localhost:${port}`}`)
})