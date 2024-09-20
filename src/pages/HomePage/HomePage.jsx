import React, { useEffect } from 'react'
import { Navbar, Footer, Hero, Faq } from '../../component/import'
import Timelinedesktop from '../../component/timeline/Timelinedesktop'
import Purplebg from '../../assets/purplebg.png'
import { Intro, Judging, Prizes, Partner, Privacy } from '../../container/import'
import { ScrollToTop } from '../../App'

function HomePage() {
  return (
    <div className='bg-[var(--background-color)]'>
      <ScrollToTop />
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
