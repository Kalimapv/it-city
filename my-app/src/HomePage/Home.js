import React from 'react'
// import Carousel from '../Carousel/Carousel'
import Carousel from '../Carousel';
import LatestProduct from '../LatestProduct';
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Carousel />
        <LatestProduct />
        <Footer />
    </div>
  )
}

export default Home