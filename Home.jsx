import React from 'react'
import InfoCard from '../components/InfoCard'
import TitleCard from '../components/TitleCard'
import ImageContentTitle from '../components/ImageTitleContent'
import home1 from "../assets/images/home1.png"
import HeroSection from '../components/Hero'
import ImageContent from '../components/ImageContent'
import home2 from "../assets/images/home2.png"
import home3 from "../assets/images/home3.png"
import Price from '../components/Pricing'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <HeroSection />
      <ImageContentTitle image={home1}/>
      <ImageContent image={home1}/>
      <ImageContent image={home2}/>
      <ImageContent image={home3}/>
     <Price />
     <Footer/>
    </>
  )
}

export default Home