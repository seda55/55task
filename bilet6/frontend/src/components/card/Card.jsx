import React from 'react'

const Card = () => {
  return (
   <div className='container ' style={{display:"flex" , flexDirection:"column"}}>
    <h1>COLLECTIONS</h1>
    <div className="cards" style={{display:"flex"}}>
    <div className="card">
      <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
      <p>190manat</p>
      <button>
        shop now
      </button>
    </div>
    <div className="card">
      <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
      <p>190manat</p>
      <button>
        shop now
      </button>
    </div>
    <div className="card">
      <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
      <p>190manat</p>
      <button>
        shop now
      </button>
    </div>
   
    </div>
   </div>
  )
}

export default Card