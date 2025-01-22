import mongoose from "mongoose";


export const productSchema = new mongoose.Schema({
    Image:{type:String , required:true},
    title:{type:String , required:true},
    category:{type:String , required:true},
    price:{type:String , required:true},
})


export const Product = mongoose.model("Product", productSchema)