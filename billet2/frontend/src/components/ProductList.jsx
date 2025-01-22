import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/features/ProductSlice';  // Import your action

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts()); // Action to get products
  }, [dispatch]);



  return (
    <div className="container mt-5">
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card mb-4">
                <img
                  src={product.Image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <button className="btn btn-primary">Detaylar</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
