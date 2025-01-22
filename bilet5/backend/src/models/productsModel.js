import mongoose  from "mongoose";


const productSchema = new mongoose.Schema({
    Image:{type:String , required:true},
    title:{type:String , required:true},
    category:{type:String , required:true},
    price:{type:Number ,  required:true}
})


const Product = mongoose.model("Product" , productSchema)

export default Product;