import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { deleteBasket } from "../../redux/features/BasketSlice";


function Basket() {
  const basket = useSelector((state) => state.basket.basket); 

  const dispatch = useDispatch();

  const handledelete =  (id)=>{
dispatch(deleteBasket(id))
  pjom,p}

  if (!basket || basket.length === 0) {
    return <div>Your basket is empty</div>;
  }

  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>
              <img
                src={item.Image}
                alt={item.title}
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
            </td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td> <button className="btn btn-danger" onClick={() => handledelete(item._id)}>delete</button></td>
          </tr>

        ))}
      </tbody>
    </Table>
  </div>
  );
}

export default Basket;
