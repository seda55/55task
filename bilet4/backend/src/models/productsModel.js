import mongoose from "mongoose";

const productsSchema =  new mongoose.Schema({
    Image:{type:String, required:true},
    title:{type:String ,required:true},
    category:{type:String , required:true},
    price:{type:String, required:true}

})

const Product = mongoose.model("Products",productsSchema);

export default Product;