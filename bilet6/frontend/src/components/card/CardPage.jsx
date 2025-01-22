import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CardPage = () => {

    const {products} = useSelector((state)=> state.product.products)
    const dispatch = useDispatch()
  return (
    <div className='container'>

    {products.map}

    </div>
  )
}

export default CardPage