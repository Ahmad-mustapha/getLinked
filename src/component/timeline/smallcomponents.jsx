import React from 'react'

export const Timelinebreakdownleft = ({title, breakdown}) =>{
  return(
    <div className='flex flex-col text-left sm:text-right w-full sm:w-2/6 pl-[4rem] sm:pl-0'>
      <p className='text-[#D434FE] text-[24px] font-[700]'>{title}</p>
      <p className='text-white text-[14px]'>{breakdown}</p>
    </div>
  )
}

export const Timelinebreakdownright = ({title, breakdown}) =>{
  return(
    <div className='flex flex-col text-left w-full sm:w-2/6 pl-[4rem] sm:pl-0'>
      <p className='text-[#D434FE] text-[24px] font-[700]'>{title}</p>
      <p className='text-white text-[14px]'>{breakdown}</p>
    </div>
  )
}

export const Timlinelist = ({num}) =>{
  return(
    // <div className=''>
    <div className='absolute left-0 top-36 sm:top-30 lg:top-20 sm:left-[48%]'>
      <p className='h-[5rem] w-[.1rem] bg-[#D434FE] absolute left-[1.2rem] bottom-12'></p>
      <p className='text-white w-10 h-10 flex items-center justify-center rounded-full bg-[#D434FE] absolute bottom-0'>{num}</p>
    </div>
    // </div>
  )
} 

export const Timelinedateleft = () =>{
  return(
    <div className='w-full pl-[4rem] sm:pl-0 sm:w-2/6'>
      <p className='text-[#D434FE] text-left sm:text-right text-[24px] font-[700]'>November 18, 2023</p>
    </div>
  )
}

export const Timelinedateright = () =>{
  return(
    <div className='w-full sm:w-2/6 pl-[4rem] sm:pl-0'>
      <p className='text-[#D434FE] text-left text-[24px] font-[700]'>November 18, 2023</p>
    </div>
  )
}

export const Desktop = () =>{
  return(
    <div className=''>
      <div className='relative flex sm:flex-row flex-col justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
       <Timelinebreakdownleft 
       breakdown='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register' 
       title='Hackathon Announcement' />
       <Timlinelist num='1'/>
       <Timelinedateright  />
      </div>
      <div className='relative flex sm:flex-row flex-col-reverse justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
        <Timelinedateleft />
        <Timlinelist num='2'/>
        <Timelinebreakdownright 
        breakdown='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register' 
        title='Teams Registration begins'/>
      </div>
      <div className='relative flex sm:flex-row flex-col justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
       <Timelinebreakdownleft 
       breakdown='Interested Participants are no longer Allowed to register' 
       title='Teams Registration ends' />
       <Timlinelist num='3'/>
       <Timelinedateright />
      </div>
      <div className='relative flex sm:flex-row flex-col-reverse justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
        <Timelinedateleft />
        <Timlinelist num='4'/>
        <Timelinebreakdownright 
        breakdown='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced' 
        title='Announcement of the accepted teams and ideas'/>
      </div>
      <div className='relative flex sm:flex-row flex-col justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
       <Timelinebreakdownleft 
       breakdown='Accepted teams can now proceed to build their ground breaking skill driven solutions' 
       title='Getlinked Hackathon 1.0 Offically Begins' />
       <Timlinelist num='5'/>
       <Timelinedateright />
      </div>
      <div className='relative flex sm:flex-row flex-col-reverse justify-center items-end gap-[0rem] sm:gap-[7rem] md:gap-[10rem] my-20'>
        <Timelinedateleft />
        <Timlinelist num='6'/>
        <Timelinebreakdownright 
        breakdown='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day' 
        title='Demo Day'/>
      </div>
    </div>
  )
}