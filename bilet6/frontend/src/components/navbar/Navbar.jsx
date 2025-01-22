import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import "../navbar/Navbar.scss"
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {basket} = useSelector((state)=>state.basket)
  const total = basket.reduce((sum,item)=> sum + item.count , 0)
  return (
    <div className="nav-container">
      <div className='container nav'>
<div className="nav-logo"><h1>DEALERS</h1></div>
<div className="nav-link">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/collection">Collection</Link></li>
    <li><Link to="/catalog">Catalog</Link></li>
    <li><Link to="/shop">Shop </Link></li>
    <li><Link to="/contact">Contact</Link></li>

  </ul>
</div>
<div className="nav-icon">
  <ul>
  <li><Link to="/basket"><FaShoppingBasket /><sup>{total}</sup>
</Link></li>
  <li><Link to="/wishlist"><FaHeart />
</Link></li>
  <li><Link to="/admin"><RiAdminFill />
</Link></li>

  </ul>
</div>
</div>
    </div>
  )
}

export default Navbar