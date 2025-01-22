import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Product from "../../../../backend/src/models/productsModel"

const initialState = {
    products:[],
}

const baseUrl = "http://localhost:5000/api/products/"

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async()=>{
        const product = await axios(baseUrl)
        return product.data;

    }
)

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async(product)=>{
        const newProduct = await axios.push(baseUrl,product)
        return newProduct.data
    }
)


export const deleteProduct =  createAsyncThunk(

    "products/deleteProduct",
    async(id)=>{
         await axios.delete(`${baseUrl}/${id}`)
    }
)