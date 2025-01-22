import React from 'react'
import "../hero/Hero.scss"

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="container">
            <div className="hero-text">
                <h1>SELECT YOUR NEW PERFECT STYLE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis commodi repudiandae temporibus nulla nam sed eligendi consectetur laborum, id eum autem recusandae nisi iure quidem magni accusamus distinctio deserunt.</p>
                <div className="but"><button className='btn btn-secondary'>Shop now </button></div>
            </div>
            <div className="hero-image">
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero