import React from 'react'
import { useEffect } from 'react'
import Vector from '../../assets/Vector 4.png'
import Chain from '../../assets/chain.png'
import Star from '../../assets/star (3).png'
import HeroImage from '../../assets/hakathonGuy.png'
import './hero.css'
import AOS from 'aos'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='getLinked__hero mt-[6rem] border-b-[1px] border-[#c5c4c4] overflow-hidden'>
      <div className="getLinked__heading-para">
        <p className='text-white text-right font-sans lg:text-[1.6rem] md:1.4rem text-[.9rem] font-bold'><i>Igniting a Revolution in HR Innovation</i></p>
        <img src={Vector} className='w-[7rem] md:w-[10rem]'/>
      </div>
      <div className="hero flex lg:flex-row items-start justify-between">
        <div 
        data-aos="fade-up" 
        data-aos-delay="500" 
        className='col1 lg:w-3/6 w-full pl-0 md:pl-[5rem]'>
          <div className="getLinkedTechHackathon__heading flex items-end">
            <p className='text-center'>getlinked Tech <br /> Hackathon<span>1.0</span></p>
            <div className='flex'>
              <span className='w-[2rem] sm:w-[3rem] sm:h-[3.5rem] h-[2.6rem]'><img className='w-full' src={Chain} alt="star" /></span>
              <span className='w-[2rem] sm:w-[3rem] sm:h-[3.5rem] h-[2.6rem]'><img className='w-full' src={Star} alt="star" /></span>
            </div>
          </div>
          <p className='text-[13px] text-center md:text-left md:text-[20px] text-white font-sans mt-4 w-max'>Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big prize</p>
          <button className='font-sans text-white register'><Link to='/register' >Register</Link></button>
          <div className='flex items-center gap-4 mt-10 font-sans'>
            <p className='text-white text-[35px]'>00<sub style={{fontSize: '.7rem'}}>H</sub></p>
            <p className='text-white text-[35px]'>00<sub style={{fontSize: '.7rem'}}>M</sub></p>
            <p className='text-white text-[35px]'>00<sub style={{fontSize: '.7rem'}}>S</sub></p>
          </div>
        </div>
        <div  
        data-aos="zoom-in" 
        data-aos-delay="500"
        
        // data-aos="fade-up"
         className="lg:w-3/6  md:w-5/6 md:m-auto w-full pt-[3rem] px-[.5rem] overflow-y-hidden flex items-center text-center md:mt-0 mt-[3rem]">
          <img src={HeroImage} alt="hakathonGuy" className='w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
