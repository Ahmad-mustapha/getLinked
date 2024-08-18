import React from 'react'
import Judge from '../../assets/attribute.png'
import './judging.css'
import Purplebg from '../../assets/purplebg.png'

export const Criteria = ({list, details}) =>{
  return(
    <div>
      <p className='text-white text-[13px] md:text-[16px]'> <span className='font-[700]'>{list} </span> 
        {details}
      </p>
    </div>
  )
}


function Judging() {
  return (
    <div className='px-8 py-[5rem] font-sans flex justify-between flex-col items-center md:flex-row overflow-x-hidden border-b-[1px] border-[#c5c4c4] overflow-hidden'>
      <div data-aos="zoom-out" className='w-full md:w-5/6 judgeimage'><img src={Judge} alt="" /></div>
      <div data-aos="fade-left" className='w-full md:w-3/6'>
        <h4 className='font-[700] text-white text-[24px] sm:text-[27px] md:text-[32px] md:text-left text-center mb-6'>Judging Criteria <br /><span className='text-[#D434FE]'> Key attributes</span></h4>
        <div className='relative flex flex-col space-y-4 sm:text-left text-center'>
          <Criteria 
          list='Innovation and Creativity:'
          details='Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
          />
          <Criteria 
          list='Functionality:'
          details='Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges wouldconsider the completeness and robustness of the solution.'
          />
          <Criteria 
          list='Impact and Relevance:'
          details='Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
          />
          <Criteria 
          list='Technical Complexity:'
          details='Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
          />
          <Criteria 
          list='Adherence to Hackathon:'
          details='Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements'
          />
          {/* <img className='absolute top-[85%] left-[10%] border-none rounded-full' src={Purplebg} alt="" /> */}
        </div>
        <div className='text-center md:text-left'><button className='font-sans text-white py-[.3rem] px-[1.6rem] rounded-md reg mt-10'>Register</button></div>
      </div>
    </div>
  )
}

export default Judging
