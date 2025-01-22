import express from 'express'

import { deleteProduct, addProduct,getProduct } from '../controllers/productaController.js'


export const router = express.Router()

router.get('/', getProduct)
router.post('/',addProduct)
router.delete("/:id",deleteProduct)