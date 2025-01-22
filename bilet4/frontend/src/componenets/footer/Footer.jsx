import React from 'react'
import { Link } from 'react-router-dom'
import "../footer/Footer.scss"
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='container'>
<div className="footer-container">
  <div className='footer-link'>
    <h3>Support</h3>
    <ul>
      <li><Link>Frequently Asked Questions</Link></li>
      <li><Link>Terms & Conditions</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>

    </ul>
  </div>
  <div className='footer-link'><h3>Support</h3>
    <ul>
      <li><Link>Frequently Asked Questions</Link></li>
      <li><Link>Terms & Conditions</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>

    </ul></div>
  <div className='footer-link'><h3>Support</h3>
    <ul>
      <li><Link>Frequently Asked Questions</Link></li>
      <li><Link>Terms & Conditions</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>

    </ul></div>
  <div className='footer-link'><h3>Support</h3>
    <ul>
      <li><Link>Frequently Asked Questions</Link></li>
      <li><Link>Terms & Conditions</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>
      <li><Link>Privacy Policy</Link></li>

    </ul></div>
</div>
<div  className='footer-icon' style={{margin:"70px"}}>
  <p>Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
 <ul>
  <li><FaFacebook /></li>
  <li><GrInstagram /></li>
  <li><FaLinkedin />
</li>
  <li><FaTwitter /></li>
 </ul>

</div>
    </div>
  )
}

export default Footer