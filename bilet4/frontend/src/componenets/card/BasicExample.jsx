import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/features/ProductSlice';
import { addBasket } from '../../redux/features/BasketSlice'; // Basketə əlavə etmək üçün

function BasicExample() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Məsələn məhsullar

  // Məhsulları serverdən çəkmək üçün useEffect istifadə edirik
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToBasket = (products) => {
    dispatch(addBasket(products)); // Məhsulu basketə əlavə etmək
  };

  return (
    <div>
      {products.map((product) => {
        return (
          <Card key={product._id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
            <Card.Img variant="top" src={product.Image} />

              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToBasket(product)} // Add to basket düyməsi
              >
                Add to Basket
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default BasicExample;
