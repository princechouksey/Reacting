import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h2>Sheryians</h2>
        <div>
           <Link to='/' > Home</Link>
           <Link to='/About' >About</Link>
           <Link to='/Contact' >Contact</Link>
        </div>
      
    </nav>
  )
}

export default Nav
