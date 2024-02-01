import React from 'react'
import Vector from '../../assets/Vector 4.png'
import Chain from '../../assets/chain.png'
import Star from '../../assets/star (3).png'
import HeroImage from '../../assets/hakathonGuy.png'
import './hero.css'
function Hero() {
  return (
    <div className='getLinked__hero'>
      <div className="getLinked__heading-para">
        <p className='text-white font-[sans-serif] lg:text-[1.7rem] text-[1.4rem] font-bold'><i>Igniting a Revolution in HR Innovation</i></p>
        <img src={Vector} className='w-[10rem]'/>
      </div>
      <div className="getLinkedTechHackathon">
        <div className="getLinkedTechHackathon__heading">
          <p>getlinked Tech <br /> Hackathon<span>1.0</span></p>
          <div className="flex flex-row">
            <img className='w-[3rem]' src={Chain} alt="chain"/>
            <img className='w-[3rem]' src={Star} alt="star" />
          </div>
        </div>
        <div className="heroImage">
          <img src={HeroImage} alt="hakathonGuy" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero
