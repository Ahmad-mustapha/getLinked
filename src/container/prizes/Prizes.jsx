import React, { useEffect } from 'react'
import Purplebg from '../../assets/purplebg.png'
import Award from '../../assets/award.png'
import Bronze from '../../assets/bronze.png'
import Silver from '../../assets/silver.png'
import Gold from '../../assets/gold.png'
import './prizes.css'
import AOS from'aos'


export const Medals = ({medal, position, amount}) =>{
  return(
    <div data-aos='fade-up' className='border-[1px] border-[#D434FE] w-[120px] sm:w-[160px] flex flex-col justify-center items-center rounded-lg h-[230px] relative'>
      <div className='absolute top-[-4.5rem] p-2'><img className='w-full' src={medal} alt="" /></div>
      <div className='flex flex-col text-center absolute bottom-0 p-2'>
        <p className='text-white text-[30px] lg:text-[36px] font-[700]'>{position}</p>
        <p className='text-[15px] lg:text-[21px] font-[600] text-white'>Runner</p>
        <p className='text-[19px] lg:text-[28px] font-[700] text-[#903AFF]'>{amount}</p>
      </div>
    </div>
  )
}

export const Winner = ({medal}) =>{
  return(
    <div data-aos='fade-up' className='border-[1px] border-[#D434FE] w-[120px] sm:w-[160px] flex flex-col justify-center items-center rounded-lg h-[230px] relative'>
      <div className='absolute top-[-8rem] w-[180px] md:w-[180px] lg:w-[220px] p-2'><img className='' src={Gold} alt="" /></div>
      <div className='flex flex-col text-center absolute bottom-0 p-2'>
        <p className='text-white text-[30px] lg:text-[36px] font-[700]'>1st</p>
        <p className='text-[15px] lg:text-[21px] font-[600] text-white'>Runner</p>
        <p className='text-[19px] lg:text-[28px] font-[700] text-[#903AFF]'>N400000</p>
      </div>
    </div>
  )
}

const Prizes = () => {
  return (
      <div className='flex items-center justify-center gap-8 flex-col md:flex-row overflow-hidden'>
        <div data-aos='zoom-out' className='w-full flex justify-center items-center md:w-2/6'><img src={Award} alt="" /></div>
        <div className='md:w-3/6 lg:w-3/6 p-10 '>
          <div data-aos='fade-down' className='mb-[12rem] md:text-left text-center'>
            <h4 className='font-[700] text-white text-[24px] sm:text-[27px] md:text-[32px] mb-6'>Prizes and <br /><span className='text-[#D434FE]'>Rewards</span></h4>
            <p className='text-[12px] md:text-[16px] text-white'>Highlight the prizes or rewards fro winners and for participant</p>
          </div>
          <div data-aos='' className='w-full flex flex-col space-y-40 items-center justify-center gap-2 md:gap-2 sm:flex-row sm:flex-nowrap sm:space-y-0'>
            <Medals position='2nd' amount='N300000' medal={Silver}/>
            <Winner />
            <Medals position='3rd' amount='N150000'  medal={Bronze}/>
          </div>
        </div>
      </div>
  )
}

export default Prizes
