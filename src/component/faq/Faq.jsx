import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

export const Eachfaq = () =>{
const [ openFaq, setopenFaq ] = useState(false)

  return(
    <div 
      onClick={() => setopenFaq(true)}
      className='flex font-sans border-b-[1px] border-[#D434FE] pb-6'>
      <div>
        <p>Can I work on a project I started before the hackathon?</p>
        <span>{openFaq ? <FaPlus onClick={setopenFaq(false)}/>: <FaPlus />}</span>
      </div>
      <p className='text-white hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem quas temporibus doloribus adipisci in molestiae error eos quod cupiditate</p>
    </div>
  )
}

function Faq() {
  return (
    <div className='p-8 font-sans flex items-center'>
      <h4 className='font-[700] text-white text-[26px] md:text-left md:text-[32px]'>Introduction to getlinked tech <br /><span className='text-[#D434FE]'> Hackathon 1.0</span></h4>
      <p className='text-white'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
      <div>

      </div>
    </div>
  )
}

export default Faq
