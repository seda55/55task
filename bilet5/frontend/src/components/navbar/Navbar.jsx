import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import "../navbar/Navbar.scss"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="container navs">
          <div className="nav-logo">
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
          </div>
          <div className="nav-link">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>

            </ul>
          </div>
          <div className="nav-icon">
          <li><Link to="/basket"><FaBasketShopping />
</Link></li>
          <li><Link to="/wishlist"><FaRegHeart />
</Link></li>
          <li><Link to="/admin"><FaUserSecret />
</Link></li>

          </div>
        </div>
    </div>
  )
}

export default Navbar