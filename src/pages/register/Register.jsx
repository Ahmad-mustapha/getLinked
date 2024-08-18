import React, { useEffect } from 'react'
import { Navbar } from '../../component/import'
import { Link } from 'react-router-dom'
import Registerimg from '../../assets/registerimage.png'
import AOS from 'aos'

const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='font-sans flex items-center flex-col md:flex-row mt-[7rem] overflow-x-hidden'>
        <div data-aos='fade-right' className='w-full md:w-4/6 lg:3/6'><img src={Registerimg} alt="" /></div>
        <div data-aos='fade-left' className='w-5/6 md:w-4/6 lg:w-3/6 md:p-16 border-none bg-transparent backdrop-blur-xl shadow-2xl'>
          <h2 className='text-[#D434FE] text-[20px] font-[600]'>Questions or need assistance?</h2>
          <p className='text-[#D434FE] text-[20px] font-[600]'>Let us know about it!</p>
          <form action="">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 text-white'>
              <div>
                <label htmlFor="">Team's Name</label>
                <input type="text" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='First Name'/>
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <input type="number" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='First Name'/>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='First Name'/>
              </div>
              <div>
                <label htmlFor="">Project Topic</label>
                <input type="text" className='w-full px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent' placeholder='First Name'/>
              </div>
              <div>
                <label htmlFor="">Category</label>
                <select name="" id="" className='w-full cursor-pointer px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent'>
                  <option value="">Select your category</option>
                  <option value=""></option>
                </select>
              </div>
              <div>
                <label htmlFor="">Category</label>
                <select name="" id="" className='w-full cursor-pointer px-4 py-2 outline-none rounded-sm border-[1px] border-white bg-transparent'>
                  <option value="">Select your category</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className='text-center'><button className='font-sans text-white register'>Submit</button></div>
          
            <p className='md:text-[13px] text-[9px] text-[#D434FE] mt-4'>Please review your registration details before submitting</p>
            <div className='flex items-center gap-2 mt-2'>
              <input type="checkbox" name="" id="" className='outline-none border-[1px] border-white'/>
              <p className='text-white md:text-[13px] text-[9px]'>I agreed with the event terms and conditions  and privacy policy</p>
            </div>
            <div><button className='font-sans p-2 w-full text-white register'>Register</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
