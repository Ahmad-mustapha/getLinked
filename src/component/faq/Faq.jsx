import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Faqimage from '../../assets/faqimg.png'
import AOS from 'aos'

export const Eachfaq = () =>{
const [ openFaq, setopenFaq ] = useState(Array(6).fill(false))
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

const questions = [
  {question: 'Can I work on a project I started before the hackathon?', answer : ''},
  {question: 'What happens if I need help during the hackathon?', answer : ''},
  {question: "What happens if I don't have an idea for a project?", answer : ''},
  {question: 'Can I join a team or do I have to come with one?', answer : ''},
  {question: 'What happens after the hackathon ends', answer : ''},
  {question: 'Can I work on a project I started before the hackathon?', answer : ''},
]
const toggleFaq = (index) =>{
  setopenFaq(openFaq.map((isOpen, i) => (i === index ? !isOpen : isOpen)))
}

  return(
    <div 
      
      className={`font-sans text-white`}>
     <ul>
        {questions.map((ques, index) => (
          <li key={index} 
          onClick={() => toggleFaq(index)}
          className='border-b-[1px] border-[#D434FE]'>
            <div className='flex items-center justify-between pb-4 mt-8'>
              <p className='text-[14px]'>{ques.question}</p>
              <span>
                {!openFaq[index] ?
                  <FaPlus onClick={() => toggleFaq(index)}/> :
                  <FaMinus onClick={() => toggleFaq(index)}/>
                  }
              </span>
            </div>
            <p 
              className={`text-[13px] transition-all duration-500 ease-in-out overflow-hidden ${openFaq[index] ? 'max-h-64 mt-4 mb-2 opacity-100' : 'max-h-0 opacity-0'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem quas temporibus doloribus adipisci in molestiae error eos quod cupiditate
            </p>
          </li>
        )) }
        
     </ul>
      {/* {console.log(openFaq)} */}
    </div>
  )
}

function Faq() {
  return (
    <div id='faqs' className='p-8 font-sans flex items-center justify-between space-x-10 space-y-4 lg:flex-row flex-col border-b-[1px] border-[#c5c4c4] overflow-x-hidden'>
      <div data-aos="fade-left" className='w-full md:w-5/6  lg:w-2/6'>
        <h4 className='font-[700] text-center text-white text-[26px] md:text-left md:text-[32px]'>Frequently Asked  <br /><span className='text-[#D434FE]'> Question</span></h4>
        <p className='text-[13px] leading-8 md:leading-0 text-center md:text-left md:text-[20px] text-white font-sans mt-4'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
        <div>
          <Eachfaq />
        </div>
      </div>
      <div data-aos="zoom-in" className='w-full md:w-4/6'>
        <img src={Faqimage} alt="" />
      </div>
    </div>
  )
}

export default Faq
