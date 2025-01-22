import React from 'react'
import Card from '../components/card/Card'
import Denim from '../components/denim/Denim'
import Hero from '../components/hero/Hero'
import Jacket from '../components/jacket/Jacket'
import ProductList from '../components/productlist/ProductList'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Card/>
      <ProductList/>
      <Jacket/>
      <Denim/>
    </div>
  )
}

export default Home