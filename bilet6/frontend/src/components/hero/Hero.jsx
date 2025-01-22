import React from 'react'
import "../hero/Hero.scss"

const Hero = () => {
  return (
    <div className='hero-container'>
<div className="container">
    <div className="hero-text">
        <h1 style={{fontSize:"60px",letterSpacing:"10px"}}>MADAWELL</h1>
        <p>Summer Collection</p>
        <h4 style={{fontSize:"35px"}}>1,499 <span style={{color:"gray",textDecorationLine:"line-through"}}> $ 1,999</span></h4>
        <div className="button">
            <button className='btn btn-outline-primary'>Shop now</button>
            <button className='btn btn-primary '>Shop now</button>
        </div>
    </div>
    <div className="hero-img">
        <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
    </div>
</div>
    </div>
  )
}

export default Hero