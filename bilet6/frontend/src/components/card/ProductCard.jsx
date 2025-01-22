import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/features/BasketSlice'

const ProductCard = ({ product }) => {
  const disbatch = useDispatch()
//   const handlebasket =()=>{
// disbatch
//   }
  return (
    <div className="card">
      <img src={product.Image} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button  onClick={()=> disbatch(addToBasket(product))}
        className='btn btn-outline-warning'>salam baskete dus</button>
      </div>
    </div>
  )
}

export default ProductCard
