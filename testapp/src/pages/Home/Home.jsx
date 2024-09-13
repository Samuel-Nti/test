
import React from 'react'

import NewsUpdate from '../../components/Newsupdate/Newsupdates'
import Hero from '../../components/HeroCarousel/Hero'
import PartnersSection from '../../components/partnershome/PartnersSection'


const Home = () => {
  return (
    <>
         <Hero/>
        <PartnersSection/>
        <NewsUpdate />
   
    </>
  )
}

export default Home