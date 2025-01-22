import React, { useEffect } from 'react'
import Cards from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/feature/ProductSlice'

const CardPage = () => {
const dispatch = useDispatch()
const {products} = useSelector((state)=> state.products)
console.log(products)

useEffect(()=>{
dispatch(getProduct())
}, [dispatch])
  return (
    <div>
        {products && products.length> 0 ? (products.map((product)=>(
            <Cards   key={product._id}  product={product} />
        ))): (<p>Not found</p>)}
    </div>
  )
}   

export default CardPage