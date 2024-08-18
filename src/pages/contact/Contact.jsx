import React from 'react'
import { Navbar } from '../../component/import'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './contact.css'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contactform font-sans py-4 px-2 lg:py-10 md:py-4 lg:px-28 md:px-20 flex flex-col md:flex-row items-center justify-center mt-[6em]'>
        <div className='w-5/6 md:w-3/6'>
          <div className='md:flex flex-col hidden'>
            <div className='text-[16px] text-white flex flex-col gap-2 '>
              <h3 className='text-[32px] font-[700] text-[#D434FE]'>Get in touch</h3>
              <p>Contact <br />Information</p>
              <p>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
              <p>Call Us : 07067981819</p>
              <p>we are open from Monday-Friday <br />08:00am - 05:00pm</p>
              <p><span className='text-[14px] font-[700]'>Share on</span></p>
            </div>
            <div className='flex gap-2 mt-2'>
              <Link><IoLogoInstagram className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaXTwitter className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaFacebookF className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaLinkedinIn className='text-[22px] text-white font-[700]'/></Link>
            </div>
          </div>
          <div className='flex flex-col mb-6 md:hidden'>
            <h3 className='text-[32px] font-[700] text-[#D434FE]'>Get in touch</h3>
            <p className='text-[16px] text-white'>Email us below to any question related to our event</p>
          </div>
        </div>
        <div className='w-5/6 md:w-4/6 lg:w-3/6 md:p-16 border-none bg-transparent backdrop-blur-xl shadow-2xl'>
          <h2 className='text-[#D434FE] text-[20px] font-[600]'>Questions or need assistance?</h2>
          <p className='text-[#D434FE] text-[20px] font-[600]'>Let us know about it!</p>
          <form action="">
            <div className='flex flex-col gap-8 mt-6 text-white'>
              <div><input type="text" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='First Name'/></div>
              <div><input type="email" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='Mail'/></div>
              <div><textarea rows='3' name="" id="" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='Message'></textarea></div>
            </div>
            <div className='text-center'><button className='font-sans text-white register'>Submit</button></div>
          </form>
          <div className='md:hidden text-center gap-2'>
            <p><span className='text-[14px] font-[600]'>Share on</span></p>
            <div className='flex items-center justify-center gap-2 mt-2'>
              <Link><IoLogoInstagram className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaXTwitter className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaFacebookF className='text-[22px] text-white font-[700]'/></Link>
              <Link><FaLinkedinIn className='text-[22px] text-white font-[700]'/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
