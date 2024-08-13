import React from 'react'
import Judge from '../../assets/attribute.png'

export const Criteria = ({list}) =>{
  return(
    <div>
      <p className='text-white'> <span className='font-[700]'>{list} </span> 
        Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
      </p>
    </div>
  )
}


function Judging() {
  return (
    <div className='p-8 font-sans flex justify-between flex-col items-center md:flex-row'>
      <div className='w-full md:w-3/6'><img src={Judge} alt="" /></div>
      <div className='w-full text-center md:w-3/6'>
        <h4 className='font-[700] text-white text-[26px] md:text-left md:text-[32px]'>Introduction to getlinked tech <br /><span className='text-[#D434FE]'> Hackathon 1.0</span></h4>
        <div className='flex flex-col space-y-4 text-center md:text-left'>
          <Criteria list='Innovation and Creativity:'/>
          <Criteria list='Innovation and Creativity:'/>
          <Criteria list='Innovation and Creativity:'/>
          <Criteria list='Innovation and Creativity:'/>
          <Criteria list='Innovation and Creativity:'/>
        </div>
        <button className='font-sans text-white py-[.3rem] px-[1.2rem] rounded-md bg-[var(--primary-color)]'>Register</button>
      </div>
    </div>
  )
}

export default Judging
