import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  const [ toggle, setToggle ] = useState(false)
  const [ visible, setVisible ] = useState(false)
  const navLinks = [
    {
      id: 0,
      text: 'Timeline',
      path: '/#timeline'
    },
    {
      id: 1,
      text: 'Overview',
      path: '/#overview'
    },
    {
      id: 2,
      text: 'FAQS',
      path: '/#faqs'
    },
    {
      id: 3,
      text: 'Contact',
      path: '/contact'
    }
  ]

  const Sidebar = () =>{
    return(
      <div className='p-[1.3rem] bg-transparent backdrop-blur-[10px] w-[350px] h-screen z-50 fixed top-0 right-0 flex flex-col space-y-[8rem] sidebar'>
        <RxCross2 className='text-[1.5rem] text-white cursor-pointer' onClick={() => setToggle(false)}/>
        <ul className='flex items-center justify-start flex-col space-y-10'>
            {
              navLinks.map((item, index) =>(
                <li style={{position: 'relative'}} key={item.id}>
                  {
                  item.path.startsWith('/#') ? (
                    <a className='line link' href={item.path}>{item.text}</a>
                  ) :
                  (
                    <Link className='line link' to={item.path}>{item.text}</Link>
                  )
                  }
                </li>
              ))
            }
            <Link className='link reg'>Register</Link>
          </ul>
      </div>
    )
  }

  return (
    <>
      <div className='navBar'>
      <div onClick={() => setToggle(false)} className={`${toggle ? 'overlay': 'hidden'}`}></div>
        <Link>
          <div className="logo">
            <h1 className='logo text-white'>get<span>Linked</span></h1>
          </div>
        </Link>
        <div className='navBar__links'>
          <ul className='flex items-center space-x-6'>
            {
              navLinks.map((item, index) =>(
                <li style={{position: 'relative'}} key={item.id}>
                  {
                  item.path.startsWith('/#') ? (
                    <a className='link line' href={item.path}>{item.text}</a>
                  ) :
                  (
                    <Link className='link line' to={item.path}>{item.text}</Link>
                  )
                  }
                </li>
              ))
            }
          </ul>
          <Link className='link reg'>Register</Link>
        </div>
        <div className="handBurger">
          {
            !toggle && <RiMenu4Fill style={{cursor: 'pointer'}} className='text-[1.5rem] text-white cursor-pointer' onClick={() => setToggle(true)}/>
            // <RxCross2  className='text-[1.5rem] text-white cursor-pointer' onClick={() => setToggle(false)}/>
          }
          {
            toggle && (
              <>
                <Sidebar />
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
