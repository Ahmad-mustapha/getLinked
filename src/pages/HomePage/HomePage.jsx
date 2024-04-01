import React from 'react'
import { Navbar, Footer, Hero, Faq, Timeline } from '../../component/import'
import Purplebg from '../../assets/purplebg.png'
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <img src={Purplebg} alt="" className='absolute top-0'/>
    </div>
  )
}

export default HomePage
