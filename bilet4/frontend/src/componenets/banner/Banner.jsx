import React from 'react'
import "../banner/Banner.scss"

const Banner = () => {
  return (
    <div className='container'>
<div className="img-banner">
    <div className='card1'>
      <h3 >Owmen`s</h3>
      <button className='btn btn-warning ' style={{borderRadius:"30px"}}>BEST NEWS DEALS</button>
      <h4 style={{color:"blue" ,fontFamily:"curisv"}}>News Collection</h4>
    </div>
    <div className='card2'>
    <h3 >Winter Cloth
</h3>
<p>Discount!
</p>
      <h4 style={{color:"blue" ,fontFamily:"curisv"}}>News Collection</h4>
    </div>
    <div className='card3'>
    <h3 >men`s</h3>
      <button className='btn btn-warning ' style={{borderRadius:"30px"}}>BEST NEWS DEALS</button>
      <h4 style={{color:"blue" ,fontFamily:"curisv"}}>News Collection</h4>
    </div>
</div>
    </div>
  )
}

export default Banner