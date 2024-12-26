import React from 'react'
import { Router, Routes,Route } from 'react-router-dom'
import About from './assets/pages/About'
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import './App.css'
import Nav from './assets/pages/Nav'

const App = () => {
  return (
   
     <div>
   <Nav />
        <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact />} />
        </Routes>
     


     </div>
   
  )
}

export default App
