import express from "express"

import { addProduct,getProduct,deleteProduct } from "../controllers/productsController.js"


const  productsRouter = express.Router();

productsRouter.post("/",addProduct)
productsRouter.get("/",getProduct)
productsRouter.delete("/:id",deleteProduct)



export default productsRouter;