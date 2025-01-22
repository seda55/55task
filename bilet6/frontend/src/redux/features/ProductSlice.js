import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const baseURL = "http://localhost:5000/api/products"

const initialState = {
    products:[],
}


export const getProducts = createAsyncThunk(

    "product/getProduct",
    async()=>{
        const response  = await axios(baseURL)
        return response.data;
    }
);

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async(product)=>{
        const response = await axios.post(baseURL,product)
        return response.data ;
    }
)

export const deleteProduct =  createAsyncThunk(
    "product/deleteProduct",
    async(id)=>{
        await axios.delete(`${baseURL}/${id}`)
        return id;
    }
)


export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getProducts.fulfilled , (state,action)=>{
            state.products =  action.payload
        })
        .addCase(addProduct.fulfilled , (state, action)=>{
            state.products.push(action.payload)
        })
        .addCase(deleteProduct.fulfilled , (state,action)=>{
            state.products = state.products.filter((product)=> product._id !== action.payload)
        })
    }
})

export default productSlice.reducer;