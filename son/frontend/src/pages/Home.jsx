import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Cards from '../components/card/Card'
import CardPage from '../components/card/CardPage'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
<CardPage/>
    </div>
  )
}

export default Home