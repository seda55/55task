import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import { router } from "./src/routes/productRouter.js"
import cors from "cors"


const port = process.env.PORT || 5001

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/products',router)



app.get("/", (req,res)=>{
res.send("backend")
})


app.listen(port , ()=>{
    console.log(`server is connect ${`http://localhost:${port}`}`)
})