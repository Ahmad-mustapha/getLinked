import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import './App.css'
import { HomePage, Contact, Registersuccess, Register } from './pages/import'
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Component to handle AOS refresh on route chnage

export const ScrollToTop = () =>{
  const { pathname } = useLocation()
  
  useEffect(() =>{
    AOS.refresh();
  }, [pathname]);

  return null
}

function App() {
  useEffect(() =>{
    AOS.init({
      duration: 1500,  // Slower animation
      offset: 0,     // Trigger animation slightly before the element is in view
      easing: 'ease-in-out', // Duration of animation in milliseconds
      once: false,
    })
    AOS.refresh();
  }, [])

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/registersuccess' element={<Registersuccess />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
