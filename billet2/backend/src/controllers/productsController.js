import mongoose from "mongoose";
import Product from "../models/productsModel.js";

// Yeni ürün ekleme
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    return res
      .status(201)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error while adding product" });
  }
};

// Ürünleri listeleme
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error while fetching products" });
  }
};

// Ürün silme
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error while deleting product" });
  }
};
