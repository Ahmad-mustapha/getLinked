import React from 'react'
import Liberty from '../../assets/liberty.png'
import Liberypay from '../../assets/libertypay.png'
import Vuzualplus from '../../assets/vuzualplus.png'
import Whisper from '../../assets/whisper.png'
import Winwise from '../../assets/winwise.png'
import Paybox  from '../../assets/Paybox.png'


export const VerticalLine = () =>{
  return(
    <div>
      <p className='h-[4.4rem] sm:h-[6rem] w-[.2rem] bg-[#D434FE]'></p>
    </div>
  )
}

export const Horizontaline = () =>{
  return(
    <div>
      <p className='w-[3.6rem] sm:w-[6rem] h-[.2rem] bg-[#D434FE]'></p>
    </div>
  )
}

export const Horizontalinerow = () =>{
  return(
    <div className='flex items-center justify-center gap-6 sm:gap-14 md:gap-28'>
      <Horizontaline />
      <Horizontaline />
      <Horizontaline />
    </div>
  )
}

export const Row = ({ first, second, third }) =>{
  return(
    <div className='flex items-center justify-center gap-[.3rem] sm:gap-8 md:gap-12'>
      <img className='w-[4rem] sm:w-[5rem] md:w-[7.5rem] px-1 sm:px-0 sm:pb-8 pb-4'src={first} alt="" />
      <VerticalLine />
      <img className='w-[4rem] sm:w-[5rem] md:w-[7.5rem]  sm:px-0 px-1 sm:pb-8 pb-4' src={second} alt="" />
      <VerticalLine />
      <img className='w-[4rem] sm:w-[5rem] md:w-[7.5rem]  sm:px-0 px-1 sm:pb-8 pb-4' src={third} alt="" />
    </div>
  )
}

function Partner() {
  return (
    <div className='w-[5/6] mt-10 py-16 px-6 font-sans flex items-center justify-center flex-col border-b-[1px] border-[#c5c4c4]' >
      <div className='flex flex-col gap-4 justify-center items-center text-center text-white'>
        <p className='font-[700] text-[32px]'>Partners and Sponsors</p>
        <p className='text-[14px] text-center'>Getlinked Hackathon 1.0 is honored to have the following major <br /> companies as its partners and sponsors</p>
      </div>
      <div className='p-4 flex flex-col gap-6 sm:p-8 md:p-16 border-[1px] border-[#D434FE] w-5/6 rounded-md mt-10'>
        <Row first={Liberty} second={Liberypay} third={Winwise}/>
        <Horizontalinerow />
        <Row first={Whisper} second={Paybox} third={Vuzualplus}/>
      </div>
    </div>
  )
}

export default Partner
