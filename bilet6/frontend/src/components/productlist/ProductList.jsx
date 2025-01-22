import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/ProductSlice'
import ProductCard from '../card/ProductCard'

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
console.log(products)
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <section className="product-section">
      <h2>Products</h2>
      <div className="product-grid">
        {products && products.length>0 ? (products.map((product)=>(
          <ProductCard key={product._id}
          product={product}
         
          />
        ))) : (<p>Not found</p>)}
      </div>
    </section>
  )
}

export default ProductList
