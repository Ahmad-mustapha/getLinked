import React, { useEffect } from 'react'
import Privacyimage from '../../assets/privacyimg.png'
import Security from '../../assets/security.png'
import { GrFormCheckmark } from "react-icons/gr";
import './privacy.css'
import AOS from 'aos'

const Privacy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className='py-16 pl-4 md:pl-16 pr-4 font-sans flex flex-col md:flex-row justify-center gap-6 overflow-x-hidden'>
      <div className='w-full md:w-3/6'>
        <div data-aos='fade-right'>
          <h4 className='font-[700] text-white text-[24px] sm:text-[27px] md:text-[32px] md:text-left text-center mb-6'>PrivacyPolicy and <br /><span className='text-[#D434FE]'>Terms</span></h4>
          <p className='font-[14px] text-white text-center md:text-left'>Last updated on September 12, 2023</p>
          <p className='font-[14px] text-white text-center md:text-left mt-2'>Below are our privacy & policy, which outline a lot of goodies. 
          it's our aim to always take of our participant</p>
        </div>
        <div data-aos='flip-down' className='p-10 border-[1px] border-[#D434FE] rounded-lg mt-6'>
          <p className='text-white text-[14px] text-center md:text-left'>At getlinked tech Hackathon 1.0, we value your privacy
          and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, disclose, 
          and safeguard your data when you participate in our tech 
          hackathon event. By participating in our event, you consent 
          to the practices described in this policy.
          </p>
          <p className='text-[16px] font-[700] text-[#D434FE] mt-4'>Licensing Policy</p>
          <p className='text-[14px] text-white'>Here are terms of our Standard License:</p>
          <ul className='flex flex-col gap-2 text-white text-[14px] mt-4'>
            <li className='flex gap-4'><span className='text-white'><GrFormCheckmark className='text-[1.1rem] bg-[#2DE100] border-none rounded-full mt-[3px]'/></span> The Standard License grants you a non-exclusive right to navigate and register for our event</li>
            <li className='flex gap-4'><span className='text-white'><GrFormCheckmark className='text-[1.1rem] bg-[#2DE100] border-none rounded-full mt-[3px]'/></span> You are licensed to use the item available at any free source sites, for your project developement</li>
          </ul>
          <div className='text-center'><button className='font-sans text-white register'>Read more</button></div>
        </div>
      </div>
      <div data-aos='zoom-in' className='w-full md:w-3/6 lg:3/6 privacybg'>
        <img src={Privacyimage} alt="" />
      </div>
    </div>
  )
}

export default Privacy
