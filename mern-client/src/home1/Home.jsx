import React from 'react'
import Banner from '../components/Banner'
import BestSellBooks from './BestSellBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import About from '../components/About'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
        <Banner />
      <BestSellBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      {/* <Review /> */}
      
      {/* <Blog/> */}
    </div>
    
  )
}

export default Home