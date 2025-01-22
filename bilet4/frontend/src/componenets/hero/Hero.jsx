import React from 'react'
import "../hero/Hero.scss"
const Hero = () => {
  return (
    
        <div className="hero-container">
            <div className='container hero' >
            <div className="hero-img">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
            </div>
            <div className="hero-text">
                <h4>60% DISCOUNT</h4>
                <h1>WINTER COLLECTION</h1>
                <p>BEST CLOTH COLLECTION BY 2020</p>
                <button className='btn btn-primary rounded'>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Hero