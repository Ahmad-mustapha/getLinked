import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  const [ toggle, setToggle ] = useState(false)
  const [ visible, setVisible ] = useState(false)
  useEffect(() =>{
    let prevS = window.pageYOffset
    window.addEventListener('scroll', () =>{
      let currentSc = pageYOffset
      prevS > currentSc ? setVisible(false) : setVisible(true)
      // console.log(prevS, currentSc);
      prevS = currentSc
    }, [])
  })
  const navObj = [
    {
      text: 'Timeline',
      link: '/#timeline'
    },
    {
      text: 'Overview',
      link: '/#overview'
    },
    {
      text: 'FAQS',
      link: '/#faqs'
    },
    {
      text: 'Contact',
      link: '/contact'
    }
  ]
  return (
    <>
      <div className='navBar'>
        <Link>
          <div className="logo">
            <h1 className='logo text-white'>get<span>Linked</span></h1>
          </div>
        </Link>
        <div className={`navBar__links ${!toggle? `navBar__rightA`: 'navBar__links'}`}>
          <div className="overlay"
            onClick={() => setToggle(false)}
          ></div>
          {
            navObj.map((item, i) =>(
              i===3?(
                <Link to={item.link} key={i}><ul><li className='relative'><a href="">{item.text}</a></li></ul></Link>
              ):
              (
                <ul><li className='relative'><a className='' href={item.link}>{item.text}</a></li></ul>
              )
            ))
          }
          <Link><p className='reg'>Register</p></Link>
        </div>
        <div className="handBurger">
          {
            !toggle ? <RiMenu4Fill className='text-[1.5rem] text-white cursor-pointer' onClick={() => setToggle(true)}/>:
            <RxCross2  className='text-[1.5rem] text-white cursor-pointer' onClick={() => setToggle(false)}/>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
