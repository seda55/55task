import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const baseURL = "http://localhost:5000/api/products"

const initialState={
    products:[]
}


export const getProduct = createAsyncThunk(
    "products/getProduct",
    async()=>{
        const response = await axios(baseURL)
        console.log(response.data)
        return response.data;
    }
)

export const addProduct = createAsyncThunk(
    "products.addProduct",
    async(product)=>{
        const response = await axios.post(baseURL,product)
        return response.data
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async(id)=>{
        await axios.delete(`${baseURL}/${id}`)
    }
)



const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.fulfilled , (state,action)=>{
   state.products = action.payload
        })
        .addCase(addProduct.fulfilled , (state, action)=>{
            state.products.push(action.payload)
        })
        .addCase(deleteProduct.fulfilled , (state,action)=>{
            state.products = state.product.filter((product)=> product._id !== action.payload)
        })
    }
})


export default productSlice.reducer;