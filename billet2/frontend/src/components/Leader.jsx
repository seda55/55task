import React from 'react'
import "../components/Leader.scss"
import { CiFacebook , CiLinkedin } from "react-icons/ci";
import { FaInstagram , FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import person1 from "../assets/image/person1.webp"

const Leader = () => {
  return (
    <div className='container'>
<div className="leader-container">
<div className="title">

    <p>TEAM</p>
    <h1>LEADERSHIP</h1>
</div>
<div className="leader-cards">
    <div className="leader-card">
<img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
<h3>John Rooster</h3>
<span>Co-Founder, President</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia consequuntur, corrupti accusantium commodi a eius delectus. Aliquam illum libero cupiditate nam fugit tempora nihil! Adipisci incidunt dolorum fugiat totam.</p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>

    <div className="leader-card">
<img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
<h3>Tom Sharp</h3>
<span>Co-Founder, COO</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias vero maxime quisquam vitae at? Veritatis impedit, vel nesciunt tenetur, iusto quibusdam et illum quia reiciendis dignissimos expedita quas numquam.</p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>
    <div className="leader-card">
<img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
<h3>
Winston Hodson</h3>
<span>Co-Founder, COO</span>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptas velit provident omnis. Aspernatur, consectetur accusamus dolorem inventore nihil, laudantium impedit doloremque aperiam, doloribus voluptates exercitationem eveniet! Dolore, voluptatum dolorum!</p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>
    
</div>

    </div>     
    </div>   
    
  )
}

export default Leader