import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../redux/features/BasketSlice';
import { deleteProduct } from '../../redux/features/ProductSlice';

const Admin = () => {
  const dispatch = useDispatch()
  const  products  = useSelector((state) => state.products.products)
  console.log(products)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product) => (
            <tr key={product._id}>
              <td><img src={product.Image} alt="" /> </td>
             <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => dispatch(deleteProduct(product._id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No products found</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default Admin
