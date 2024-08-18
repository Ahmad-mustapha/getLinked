import React from 'react'
import { Desktop } from './smallcomponents' 

function Timelinedesktop() {
  return (
    <div className='font-sans p-6 flex flex-col'>
      <div className='text-white text-center mb-6'>
        <h3 className='font-[700] text-[32px]'>Timeline</h3>
        <p className='text-[14px]'>Here is the breakdown of the time we anticipate <br /> using for the upcoming event.</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Desktop />
      </div>
    </div>
  )
}

export default Timelinedesktop
