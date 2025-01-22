import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import "../navbar/Navbar.scss"
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const basket = useSelector((state) => state.basket.basket);
     const totalItems = basket.reduce((total, item) => total + item.count, 0);


  return (
        <div className="nav-container">
            <div className="container nav">
            <div className='nav-logo'>
                <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" />
            </div>
            <div className='nav-link'>
                <ul className="nav-route">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li><Link to="/latest">Latest</Link></li>
                    <li><Link to="/categori">Categori</Link></li>

                </ul>
            </div>
            <div className='nav-icon'>
                <li><Link to="/basket"><FaBasketShopping /> <sup>{totalItems}</sup></Link></li>
            </div>
        </div>
    </div>
  )
}

export default Navbar