// import  Product  from "../models/productsModel.js";

import { Product } from "../models/productsModel.js"



export const getProduct = async(req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).send(product)
    }catch(error){
res.status(500)
console.log(error)
    }
}

export const addProduct = async(req,res)=>{
    try{
        const newProduct = await Product(req.body)
        await newProduct.save();
        res.status(201).send(newProduct)
    }catch(error){
        res.status(500)
        console.log(error)
            }
}


export const deleteProduct = async(req,res)=>{
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct){
            res.status(404).send("not foundd product ")
        }
        res.send(deleteProduct)
    }catch(error){
        res.status(500)
        console.log(error)
            }
}