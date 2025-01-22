import React from 'react'
import "../jacket/Jacket.scss"

const Jacket = () => {
  return (
    <div className='jacket'>
        <div className="container">
            <div className="jacket-img">
                <img src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png" alt="" />
            </div>
            <div className="jacket-text">
                <h4>#New Summer Collection 2019</h4>
                <h1>Jacket</h1>
                <button className='btn btn-dark'>Shop now</button>
            </div>
        </div>
    </div>
  )
}

export default Jacket