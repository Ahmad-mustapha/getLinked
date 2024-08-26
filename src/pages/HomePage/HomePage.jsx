import React, { useEffect } from 'react'
import { Navbar, Footer, Hero, Faq } from '../../component/import'
import Timelinedesktop from '../../component/timeline/Timelinedesktop'
import Purplebg from '../../assets/purplebg.png'
import { Intro, Judging, Prizes, Partner, Privacy } from '../../container/import'
import AOS from 'aos'
function HomePage() {
  useEffect(() =>{
    AOS.init({
      duration: 1500,  // Slower animation
      offset: 120,     // Trigger animation slightly before the element is in view
      easing: 'ease-in-out', // Duration of animation in milliseconds
      once: true,
    })
  }, [])
  return (
    <div className='bg-[var(--background-color)]'>
      <Navbar />
      <Hero />
      <Intro />
      <Judging />
      <Faq />
      <Timelinedesktop />
      <Prizes />
      <Partner />
      <Privacy />
      <Footer />
      {/* <img src={Purplebg} alt="" className='absolute top-0'/> */}
    </div>
  )
}

export default HomePage
