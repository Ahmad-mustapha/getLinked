import { useEffect, useState } from 'react'
import './App.css'
import { HomePage, Contact, Registersuccess, Register } from './pages/import'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() =>{
    AOS.init({
      duration: 1200, // Duration of animation in milliseconds
      once: true,
    })
  }, [])

  return (
    <>
      <Router>
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
