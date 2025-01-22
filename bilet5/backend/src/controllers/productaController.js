import Product from "../models/productsModel"
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
        await newProduct.save()
        res.status(201).send(newProduct)
    }catch(error){
        res.status(500)
        console.log(error)
    }
}



export const deleteProduct = async(req,res)=>{
    try{
        const deleteData = await Product(req.params.id)
        if(!deleteData){
            res.status(404).send('not found Product')
        }
        res.send(deleteData)
    }catch(error){
        res.status(500)
        console.log(error)
    }
}