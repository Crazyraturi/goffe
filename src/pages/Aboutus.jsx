import React from 'react'
import HeroSection from '../components/HeroSection'
import Feature from '../components/Feature'
import VideoThumbnail from '../components/VideoThumbnail.jsx'
import Testemonials from '../components/Testemonials.jsx'
import OfferBanner from '../components/OfferBanner.jsx'
import Brands from '../components/Brands.jsx'
import Subscribe from '../components/SubscribeComp.jsx'


const Aboutus = () => {
  return (
    <div>
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