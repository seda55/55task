import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    basket:[]
}


const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket:(state, action)=>{
            const existProduct = state.basket.find((item)=> item._id == action.payload._id)

            if(!existProduct){
                state.basket.push({...action.payload , count: 1})
            } else{
                existProduct.count++
            }
        },
        removeFromBasket :(state , action)=>{
state.basket = state.basket.find((item)=>item._id !== action.payload)
        }
    }
})

export default basketSlice.reducer
export const {addBasket, removeFromBasket} = basketSlice.actions