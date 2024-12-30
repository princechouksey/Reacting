import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import About from './assets/pages/About'
import Home from './assets/pages/Home'
import Contact from './assets/pages/Contact'
import './App.css'
import Nav from './assets/pages/Nav'
import Product from './assets/pages/Product'
import Man from './assets/pages/Man'
import Details from './assets/pages/Details'
import SpecificDetails from './assets/pages/SpecificDetails'
import ErrorPage from './assets/pages/ErrorPage'


const App = () => {
  return (
   
     <div>
   <Nav />
        <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/Contact' element={<Contact />} />
       <Route path='/product' element={<Product />} />
       <Route  path='/product/:id' element={<Details />} />
       <Route  path='/product/:id/:user' element={<SpecificDetails />} />
       <Route path='/*' element={<ErrorPage /> } />
       
        </Routes>
     


     </div>
   
  )
}

export default App
