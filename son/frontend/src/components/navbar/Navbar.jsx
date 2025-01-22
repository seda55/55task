import React from 'react'
import "../navbar/Navbar.scss"
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="container">
        <div className="nav-logo">
<img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="nav-link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/latest">Latest</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/pages">Pages</Link></li>

          </ul>
        </div>
        <div className="nav-icon">
        <li><Link to="/basket"><FaShoppingBasket /> <sup>0</sup>
        </Link></li>
        <li><Link to="/wishlist"><FaHeart />
        </Link></li>
        <li><Link to="/admin"> <RiAdminFill />
        Admin</Link></li>

        </div>
      </div>
    </div>
  )
}

export default Navbar