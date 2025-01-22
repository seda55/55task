import React from 'react'
import Title from "../title/Title"
import Card from 'react-bootstrap/Card';
import "../banner/Banner.scss"


const Banner = () => {
  return (
    <div className='container banner'>
        <Title>New Arrivals</Title>
       <div className="cards">
       <Card style={{ width: '18rem' , borderRadius: '0' , border:"none"}}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" style={{width:"350px"}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none" }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" style={{width:"350px"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none" }}>
      <Card.Img variant="top" src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" style={{width:"350px"}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
       </div>
    </div>

  )
}

export default Banner