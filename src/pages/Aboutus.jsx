import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Feature from '../components/Feature'
import VideoThumbnail from '../components/VideoThumbnail.jsx'
import Testemonials from '../components/Testemonials.jsx'
import OfferBanner from '../components/OfferBanner.jsx'
import Brands from '../components/Brands.jsx'
import Subscribe from '../components/SubscribeComp.jsx'


const Aboutus = () => {
  return (
    <div className='bg-[#F9F9F9]'>
        <HeroSection/>
        <Feature/>
        <VideoThumbnail/>
        <Testemonials/>
        <OfferBanner/>
        <Brands/>
        <Subscribe/>
    </div>
  )
}

export default Aboutus