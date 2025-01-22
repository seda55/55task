import React from 'react'
import Leader from '../components/Leader'
import ProductList from '../components/ProductList'
import Services from '../components/Services'
import Shop from '../components/Shop'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <div>
      <Shop/>
      <Trusted/>
      <Leader/>
      <ProductList/>
      <Services/>
    </div>
  )
}

export default Home