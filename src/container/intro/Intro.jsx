import React from 'react'
import Bigidea from '../../assets/thebigidea.png'
import Rules from '../../assets/rules.png'
// import Judge from '../../assets/attribute.png'

function Intro() {
  return (
    <div className=''>
      <div className='relative font-sans flex items-center md:text-left text-center flex-col md:flex-row gap-10 border-b-[1px] border-[#c5c4c4]'>
        <div className='w-full p-8 flex items-center justify-center md:w-3/6'><img src={Bigidea} alt="" /></div>
        <div className='w-full p-8 sm:4/6 md:w-4/6'>
          <h4 className='font-[700] text-white text-[24px] sm:text-[27px] md:text-[32px]'>Introduction to getlinked tech <br /><span className='text-[#D434FE]'> Hackathon 1.0</span></h4>
          <p className='text-white text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, 
            you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, 
            and creating solutions that can changes the world, that's what we're all about!</p>
        </div>
      </div>
      <div className='relative font-sans flex items-center justify-center md:text-left text-center flex-col md:flex-row gap-8 border-b-[1px] border-[#c5c4c4]'>
        <div className='w-full p-8 md:w-4/6 lg::w-3/6'>
          <h4 className='font-[700] text-white text-[24px] sm:text-[27px] md:text-[32px]'>Rules and <br /><span className='text-[#D434FE]'> Guidelines</span></h4>
          <p className='text-white text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, 
            you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, 
            and creating solutions that can change the world, that's what we're all about!</p>
        </div>
        <div className='w-full flex items-center justify-center md:w-3/6'><img src={Rules} alt="" /></div>
      </div>
    </div>
  )
}

export default Intro
