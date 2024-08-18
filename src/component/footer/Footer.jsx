import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='p-10 sm:p-20 md:p-24 lg:p-28 font-sans flex items-center justify-center flex-col bg-[#120c23]'>
      <div className='flex flex-wrap w-full gap-6 sm:ga-8 md:gap-10 lg:gap--20 '>
        <div className="w-5/6 sm:w-3/6">
          <h1 className='lg:text-[2.3rem] text-[2.1rem] font-bold font-[sans-serif] text-[700] text-white'>get<span>Linked</span></h1>
          <p className='text-white text-[12px] leading-6'>Getlinked Tech Hackathon is a technology innovation program 
            established by a group of organizations with the aim of showcasing 
            young and talented individuals in the field of technology
          </p>
          <p className='text-white text-[12px] mb-8 md:mb-0 flex gap-2 mt-10'>Terms of Use  <p className='h-[1.4rem] w-[.1rem] bg-[#D434FE]'></p>   Privacy Policy</p>
        </div>
        <ul className='flex flex-col gap-2'>
          <li className='text-[#D434FE] text-[14px] font-[700]'>Useful Links</li>
          <li className='text-[12px] text-white'><Link>Overview</Link></li>
          <li className='text-[12px] text-white'><Link>Timeline</Link></li>
          <li className='text-[12px] text-white'><Link>FAQs</Link></li>
          <li className='text-[12px] text-white'><Link to='./register'>Register</Link></li>
          <li className='text-white flex items-center gap-4'>
            <Link className='text-[12px]'>Follow us</Link>
            <span className='flex gap-2'>
              <Link><IoLogoInstagram className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaXTwitter className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaFacebookF className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaLinkedinIn className='text-[22px] text-white font-[700]'/></Link>
            </span>
          </li>
        </ul>
        <div className=''>
          <p className='text-[#D434FE] text-[14px] font-[700]'>Contact Us</p>
          <p className='text-white text-[12px] flex items-center gap-2 my-2'><BiSolidPhoneCall className='text-[14px]'/> +234 6707653444</p>
          <p className='text-white text-[12px] flex items-baseline gap-2'><FaLocationDot /> 27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
        </div>
      </div>
      <div className='text-center mt-14'><p className='text-white text-[12px]'>All rights reserved. © getlinked Ltd.</p></div>
    </div>
  )
}

export default Footer
