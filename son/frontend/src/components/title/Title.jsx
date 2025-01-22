import React from 'react'

const Title = ({children}) => {
  return (
    <div className='container'>
<h1 style={{fontSize:"60px",padding:"20px"}}>{children}</h1>
    </div>
  )
}

export default Title