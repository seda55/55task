import Product from "../models/productsModel.js";




export const addProduct = async(req,res)=>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.json({newProduct})
    } catch (error) {
        res.json("error")
    }
}

export const getProduct = async(req,res)=>{
    try {
        const products = await Product.find()
        res.json({products})
    } catch (error) {
        res.json("error")
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params
    try {
        const newProduct = await Product.findByIdAndDelete(id)
        res.json({newProduct})
    } catch (error) {
        res.json("error")
    }
}