import React from 'react'
import ProductList from '../components/ProductList'
import ImageCarousel from '../components/ImageCarousel'

const LandingPage = () => {
  return (
    <div className='bg-[#f5f5f5] h-auto'>
        <ImageCarousel />
        <ProductList />
    </div>
  )
}

export default LandingPage