import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  const [ toggle, setToggle ] = useState(false)
  const [ visible, setVisible ] = useState(false)
  useEffect(() =>{
    const prevS = window.pageYOffset
    window.addEventListener('scroll', () =>{
      let currentSc = pageYOffset
      // prevS > currentSc ? 
    })
  })
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Navbar
