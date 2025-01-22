import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/products";
const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const { data } = await axios.get(baseURL);
  return data.products; 
});

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const { data } = await axios.post(baseURL, product);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    });
  },
});

export default productSlice.reducer; 
