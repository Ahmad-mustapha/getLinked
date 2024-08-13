import React from 'react'
import { Navbar, Footer, Hero, Faq, Timeline } from '../../component/import'
import Purplebg from '../../assets/purplebg.png'
import { Intro, Judging } from '../../container/import'
function HomePage() {
  return (
    <div className='bg-[var(--background-color)]'>
      <Navbar />
      <Hero />
      <Intro />
      <Judging />
      {/* <img src={Purplebg} alt="" className='absolute top-0'/> */}
    </div>
  )
}

export default HomePage
